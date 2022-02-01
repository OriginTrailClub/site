import path from 'path';
import fs from 'fs';

import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const lessonRegex = new RegExp(/^(?<order>[0-9]+)-(?<slug>.*).mdx/);

type CourseLesson = {
  title: string;
  slug: string;
};

export type CourseSection = {
  title: string;
  lessons: CourseLesson[];
};

export const getCourse = async (slug: string) => {
  const courseDirectory = path.join(process.cwd(), 'courses', slug);

  const markdownWithMeta = fs.readFileSync(
    path.join(courseDirectory, 'index.mdx'),
    'utf-8'
  );

  const fileNames = fs.readdirSync(courseDirectory);

  let lessons = [];

  for (let fileName of fileNames) {
    const result = fileName.match(lessonRegex);

    if (result) {
      const order = result['groups']?.order ?? '';
      const slug = result['groups']?.slug ?? '';

      const markdownWithMeta = fs.readFileSync(
        path.join(courseDirectory, fileName),
        'utf-8'
      );

      const {
        data: { title, section },
      } = matter(markdownWithMeta);

      lessons.push({
        order: Number(order),
        slug,
        title,
        section,
      });
    }
  }

  lessons.sort((a, b) => a.order - b.order);

  let toc = [];

  let curSection: CourseSection | undefined;

  for (let lesson of lessons) {
    if (!curSection || curSection.title !== lesson.section) {
      curSection = {
        title: lesson.section,
        lessons: [],
      };

      toc.push(curSection);
    }

    curSection.lessons.push({
      slug: lesson.slug,
      title: lesson.title,
    });
  }

  const { data, content } = matter(markdownWithMeta);

  const source = await serialize(content, { scope: data });

  return {
    data,
    content: source,
    toc,
  };
};

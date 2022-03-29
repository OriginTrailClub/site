import path from 'path';
import fs from 'fs';

import { serializeMarkdown } from './serializeMarkdown';
import { CourseLessonsSection } from './types';

const lessonRegex = new RegExp(/^(?<order>[0-9]+)-(?<slug>.*).mdx/);

export const getCourseLessons = async (course: string) => {
  const courseDirectory = path.join(process.cwd(), 'courses', course);

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
      } = await serializeMarkdown(markdownWithMeta);

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

  let curSection: CourseLessonsSection | undefined;

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

  return toc;
};

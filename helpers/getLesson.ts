import path from 'path';
import fs from 'fs';

import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import { slugify } from 'utils/slugify';

const lessonRegex = new RegExp(/^(?<order>[0-9]+)-(?<slug>.*).mdx/);

export const getLesson = async ({
  course,
  lesson,
}: {
  course: string;
  lesson: string;
}) => {
  const lessonDirectory = path.join(process.cwd(), 'courses', course);
  const lessonFiles = fs.readdirSync(lessonDirectory);

  let lessonFile;

  for (lessonFile of lessonFiles) {
    const result = lessonFile.match(lessonRegex);

    if (result && result['groups']?.slug === lesson) {
      break;
    }
  }

  if (!lessonFile) {
    return null;
  }

  const markdownWithMeta = fs.readFileSync(
    path.join(lessonDirectory, lessonFile),
    'utf-8'
  );

  const { data, content } = matter(markdownWithMeta);

  const headingsLines = content.split('\n').filter((line) => line.match(/^##\s(.*)/));

  const headings = headingsLines.map(row => {
    const text = row.replace(/^##\s(.*)/, '$1');

    return {
      label: text,
      slug: slugify(text),
    };
  });

  const source = await serialize(content, { scope: data });

  return {
    data,
    content: source,
    headings,
  };
};

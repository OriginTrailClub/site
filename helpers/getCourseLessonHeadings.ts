import { slugify } from 'utils/slugify';

import { getCourseLessonMarkdown } from './getCourseLessonMarkdown';
import { serializeMarkdown } from './serializeMarkdown';

export const getCourseLessonHeadings = async ({
  course,
  lesson,
}: {
  course: string;
  lesson: string;
}) => {
  const markdownWithMeta = await getCourseLessonMarkdown({ course, lesson });

  if (!markdownWithMeta) {
    return null;
  }

  const { content } = await serializeMarkdown(markdownWithMeta);

  const headingsLines = content
    .split('\n')
    .filter((line) => line.match(/^##\s(.*)/));

  const headings = headingsLines.map((row) => {
    const text = row.replace(/^##\s(.*)/, '$1');

    return {
      label: text,
      slug: slugify(text),
    };
  });

  return headings;
};

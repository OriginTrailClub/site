import { slugify } from 'utils/slugify';

import { getCourseLessonMarkdown } from './getCourseLessonMarkdown';
import { serializeMarkdown } from './serializeMarkdown';

export const getCourseLessonMeta = async ({
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

  const {
    data: { title },
  } = await serializeMarkdown(markdownWithMeta);

  return {
    title,
    slug: slugify(title),
  };
};

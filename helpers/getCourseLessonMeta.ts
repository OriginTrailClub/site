import matter from 'gray-matter';

import { slugify } from 'utils/slugify';

import { getCourseLessonMarkdown } from './getCourseLessonMarkdown';

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
  } = matter(markdownWithMeta);

  return {
    title,
    slug: slugify(title),
  };
};

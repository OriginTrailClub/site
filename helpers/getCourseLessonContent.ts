import matter from 'gray-matter';

import { serialize } from 'next-mdx-remote/serialize';

import { getCourseLessonMarkdown } from './getCourseLessonMarkdown';

export const getCourseLessonContent = async ({
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

  const { data, content } = matter(markdownWithMeta);

  const source = await serialize(content, { scope: data });

  return source;
};

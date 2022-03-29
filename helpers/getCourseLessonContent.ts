import { serializeMarkdown } from './serializeMarkdown';
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

  const { source } = await serializeMarkdown(markdownWithMeta);

  return source;
};

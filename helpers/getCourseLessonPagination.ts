import { getCourseLessons } from './getCourseLessons';

export const getCourseLessonPagination = async ({
  course,
  lesson,
}: {
  course: string;
  lesson: string;
}) => {
  const lessons = (await getCourseLessons(course)).flatMap(
    ({ lessons }) => lessons
  );

  const currentLessonIndex = lessons.findIndex(({ slug }) => slug === lesson);

  if (currentLessonIndex === -1) {
    return;
  }

  const totalLessons = lessons.length;

  const previousLessonSlug = lessons?.[currentLessonIndex - 1]?.slug ?? null;
  const nextLessonSlug = lessons?.[currentLessonIndex + 1]?.slug ?? null;

  return {
    nextLessonSlug: nextLessonSlug,
    totalLessons: totalLessons,
    currentLessonIndex: currentLessonIndex + 1,
    previousLessonSlug: previousLessonSlug,
  };
};

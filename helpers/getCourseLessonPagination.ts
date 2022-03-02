import matter from 'gray-matter';

import { slugify } from 'utils/slugify';

import { getCourseLessonMarkdown } from './getCourseLessonMarkdown';
import { getCourseLessons } from './getCourseLessons';

export const getCourseLessonPagination = async ({
  course,
  lesson,
}: {
  course: string;
  lesson: string;
}) => {
  let totalLessons;
  let currentLessonIndex = 0;
  let previousLessonSlug = null;
  let nextLessonSlug = null;

  for (let { lessons } of await getCourseLessons(course)) {
    currentLessonIndex = lessons.findIndex(({ slug }) => slug === lesson);

    if (currentLessonIndex === -1) {
      continue;
    }

    totalLessons = lessons.length;

    previousLessonSlug = lessons?.[currentLessonIndex - 1]?.slug ?? null;
    nextLessonSlug = lessons?.[currentLessonIndex + 1]?.slug ?? null;

    break;
  }

  return {
    nextLessonSlug: nextLessonSlug,
    totalLessons: totalLessons,
    currentLessonIndex: currentLessonIndex + 1,
    previousLessonSlug: previousLessonSlug,
  };
};

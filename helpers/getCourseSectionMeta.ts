import matter from 'gray-matter';

import { slugify } from 'utils/slugify';

import { getCourseLessonMarkdown } from './getCourseLessonMarkdown';
import { getCourseLessons } from './getCourseLessons';

export const getCourseSectionMeta = async ({
  course,
  lesson,
}: {
  course: string;
  lesson: string;
}) => {
    let section;
    const courseLessons = await getCourseLessons(course);

    for (section of courseLessons) {
        const lessonIndex = section.lessons.findIndex(({ slug }) => slug === lesson);
        
        if (lessonIndex === -1) {
            continue;
        }

        break;
    }

    if (!section) {
        return null;
    }

    return {
        title: section.title,
        slug: section.lessons[0].slug
    }
};

import fs from 'fs';
import path from 'path';

const lessonRegex = new RegExp(/^(?<order>[0-9]+)-(?<slug>.*).mdx/);

export const getCourseLessonMarkdown = async (params: {
  course: string;
  lesson: string;
}) => {
  const { course, lesson } = params;

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

  return fs.readFileSync(path.join(lessonDirectory, lessonFile), 'utf-8');
};

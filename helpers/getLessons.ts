import path from 'path';
import fs from 'fs';

const lessonRegex = new RegExp(/^(?<order>[0-9]+)-(?<slug>.*).mdx/);

export const getLessons = async () => {
  const coursesDirectory = path.join(process.cwd(), 'courses');
  const coursesDirectories = fs.readdirSync(coursesDirectory);

  let lessons = [];

  for (let courseDirectory of coursesDirectories) {
    const lessonDirectory = path.join(process.cwd(), 'courses', courseDirectory);
    const lessonFiles = fs.readdirSync(lessonDirectory);

    for (let lessonFile of lessonFiles) {
      const result = lessonFile.match(lessonRegex);

      if (result) {
        const slug = result['groups']?.slug ?? '';

        lessons.push({
            course: courseDirectory,
            lesson: slug,
        });
      }
    }
  }

  return lessons;
}
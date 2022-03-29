import path from 'path';
import fs from 'fs';

import { slugify } from 'utils/slugify';

import {serializeMarkdown} from './serializeMarkdown';

export const getCourses = async () => {
  const coursesDirectory = path.join(process.cwd(), 'courses');

  const files = fs.readdirSync(coursesDirectory);

  let courses = [];

  for (let filename of files) {
    const markdownWithMeta = fs.readFileSync(
      path.join(coursesDirectory, filename, 'index.mdx'),
      'utf-8'
    );
    const { data } = await serializeMarkdown(markdownWithMeta);

    courses.push({
      slug: slugify(data.subject),
      ...data,
    });
  }

  return courses;
};

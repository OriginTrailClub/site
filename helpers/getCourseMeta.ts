import path from 'path';
import fs from 'fs';

import matter from 'gray-matter';
import { slugify } from 'utils/slugify';

export const getCourseMeta = async (course: string) => {
  const courseDirectory = path.join(process.cwd(), 'courses', course);

  const markdownWithMeta = fs.readFileSync(
    path.join(courseDirectory, 'index.mdx'),
    'utf-8'
  );

  const {
    data: { subject },
  } = matter(markdownWithMeta);

  return {
    subject,
    slug: slugify(subject),
  };
};

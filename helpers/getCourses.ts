import matter from 'gray-matter';

import path from 'path';
import fs from 'fs';

export const getCourses = async () => {
  const coursesDirectory = path.join(process.cwd(), 'courses');

  const files = fs.readdirSync(coursesDirectory);

  return files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(coursesDirectory, filename, 'index.mdx'),
      'utf-8'
    );
    const { data } = matter(markdownWithMeta);

    return {
      params: {
        slug: filename.replace(/\.mdx$/, ''),
      },
      data,
    };
  });
};

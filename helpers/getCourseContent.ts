import path from 'path';
import fs from 'fs';

import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export const getCourseContent = async (course: string) => {
  const courseDirectory = path.join(process.cwd(), 'courses', course);

  const markdownWithMeta = fs.readFileSync(
    path.join(courseDirectory, 'index.mdx'),
    'utf-8'
  );

  const { data, content } = matter(markdownWithMeta);

  const source = await serialize(content, { scope: data });

  return source;
};

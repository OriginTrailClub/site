import path from 'path';
import fs from 'fs';

import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export const getCourse = async (params: { slug: string }) => {
  const { slug } = params;

  const courseDirectory = path.join(process.cwd(), 'courses', slug);

  const markdownWithMeta = fs.readFileSync(
    path.join(courseDirectory, 'index.mdx'),
    'utf-8'
  );

  const { data, content } = matter(markdownWithMeta);

  const source = await serialize(content, { scope: data });

  return {
    data,
    content: source,
  };
};

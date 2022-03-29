import path from 'path';
import fs from 'fs';

import { serializeMarkdown } from './serializeMarkdown';

export const getCourseContent = async (course: string) => {
  const courseDirectory = path.join(process.cwd(), 'courses', course);

  const markdownWithMeta = fs.readFileSync(
    path.join(courseDirectory, 'index.mdx'),
    'utf-8'
  );

  const { source } = await serializeMarkdown(markdownWithMeta);
  return source;
};

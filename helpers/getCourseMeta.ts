import path from 'path';
import fs from 'fs';

import { slugify } from 'utils/slugify';

import { serializeMarkdown } from './serializeMarkdown';

export const getCourseMeta = async (course: string) => {
  const courseDirectory = path.join(process.cwd(), 'courses', course);

  const markdownWithMeta = fs.readFileSync(
    path.join(courseDirectory, 'index.mdx'),
    'utf-8'
  );

  const {
    data: { subject },
  } = await serializeMarkdown(markdownWithMeta);

  return {
    subject,
    slug: slugify(subject),
  };
};

import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import rehypeImgSize from 'rehype-img-size';

export async function serializeMarkdown(markdownWithMeta: string) {
  const { data, content } = matter(markdownWithMeta);

  const source = await serialize(content, {
    scope: data,
    mdxOptions: {
      // @ts-ignore
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }]],
    },
  });

  return { source, content, data };
}

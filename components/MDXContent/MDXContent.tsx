import {
  Heading,
  HeadingProps,
  Paragraph,
  Typography,
  List,
  ListProps,
  ListItemProps,
  Bold,
  BoldProps,
  Italic,
  ItalicProps
} from 'components/Typography';
import { YoutubeEmbed } from 'components/Embeds';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { slugify } from 'utils/slugify';

function Heading2(props: Omit<HeadingProps, 'level'>) {
  let id;

  if (typeof props.children === "string") {
    id = slugify(props.children);
  }

  return <Heading id={id} {...props} level={2} />;
}

const components = {
  wrapper: Typography,
  p: Paragraph,
  h1: () => null,
  h2: (props: Omit<HeadingProps, 'level'>) => <Heading2 {...props} />,
  h3: (props: Omit<HeadingProps, 'level'>) => <Heading {...props} level={3} />,
  h4: (props: Omit<HeadingProps, 'level'>) => <Heading {...props} level={4} />,

  h5: () => null,
  h6: () => null,

  ul: (props: Omit<ListProps, 'style'>) => <List {...props} />,
  ol: (props: Omit<ListProps, 'style'>) => <List {...props} style="ordered" />,
  li: (props: ListItemProps) => <List.Item {...props} />,

  strong: (props: BoldProps) => <Bold {...props} />,
  em: (props: ItalicProps) => <Italic {...props} />,

  YoutubeEmbed,
};

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export function MDXContent(props: MDXContentProps) {
  const { source } = props;

  return <MDXRemote {...source} components={components} />;
}

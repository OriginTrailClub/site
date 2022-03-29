import * as React from 'react';

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
  ItalicProps,
  Block,
  Link,
  LinkProps,
} from 'components/Typography';
import { YoutubeEmbed, YoutubeEmbedProps } from 'components/Embeds';
import { useRouter } from 'next/router'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { slugify } from 'utils/slugify';

function Heading2(props: Omit<HeadingProps, 'level'>) {
  let id;

  if (typeof props.children === 'string') {
    id = slugify(props.children);
  }

  return <Heading id={id} {...props} level={2} />;
}

function MDLink(props: LinkProps) {
  const { href } = props;

  const router = useRouter();

  console.log(router)

  const isInternal = React.useMemo(() => {
    return href[0] === '/';
  }, [href]);

  if (isInternal) {
    return (<Link {...props} />)
  }

  return (<Link {...props} target="_blank" rel="noopener noreferrer" />)


  // Internal / External
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

  a: (props: LinkProps) => <MDLink {...props} />,

  YoutubeEmbed: (props: YoutubeEmbedProps) => (
    <Block>
      <YoutubeEmbed {...props} />
    </Block>
  ),
};

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export function MDXContent(props: MDXContentProps) {
  const { source } = props;

  // @ts-ignore
  return <MDXRemote {...source} components={components} />;
}

import {
  Heading,
  HeadingProps,
  Paragraph,
  Typography,
} from 'components/Typography';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

const components = {
  wrapper: Typography,
  p: Paragraph,
  h2: (props: Omit<HeadingProps, 'level'>) => <Heading level={2} {...props} />,
  h3: (props: Omit<HeadingProps, 'level'>) => <Heading level={3} {...props} />,
  h4: (props: Omit<HeadingProps, 'level'>) => <Heading level={4} {...props} />,
};

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export function MDXContent(props: MDXContentProps) {
  const { source } = props;

  return <MDXRemote {...source} components={components} />;
}

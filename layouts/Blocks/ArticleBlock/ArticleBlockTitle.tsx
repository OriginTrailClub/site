import { Heading, HeadingProps } from 'components/Typography';

import * as Styles from './ArticleBlockTitle.styles';

export type ArticleBlockTitleProps = Pick<HeadingProps, 'children'>;

export function ArticleBlockTitle(props: HeadingProps) {
  const { children } = props;
  return (
    <header className={Styles.container()}>
      <Heading level={3}>{children}</Heading>
    </header>
  );
}

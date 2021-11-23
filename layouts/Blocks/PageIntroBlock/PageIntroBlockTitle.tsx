import { Heading, HeadingProps } from 'components/Typography';

import * as Styles from './PageIntroBlockTitle.styles';

export type PageIntroBlockTitleProps = Pick<HeadingProps, 'children'>;

export function PageIntroBlockTitle(props: HeadingProps) {
  const { children } = props;
  return (
    <header className={Styles.container()}>
      <Heading level={1}>{children}</Heading>
    </header>
  );
}

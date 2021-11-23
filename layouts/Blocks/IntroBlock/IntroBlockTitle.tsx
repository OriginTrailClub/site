import { Heading, HeadingProps } from 'components/Typography';

import * as Styles from './IntroBlockTitle.styles';

export type IntroBlockTitleProps = Pick<HeadingProps, 'children'>;

export function IntroBlockTitle(props: HeadingProps) {
  const { children } = props;
  return (
    <header className={Styles.container()}>
      <Heading level={2}>{children}</Heading>
    </header>
  );
}

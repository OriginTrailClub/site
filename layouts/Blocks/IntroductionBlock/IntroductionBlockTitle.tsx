import { Heading, HeadingProps } from 'components/Typography';

import * as Styles from './IntroductionBlockTitle.styles';

export type IntroductionBlockTitleProps = Pick<HeadingProps, 'children'>;

export function IntroductionBlockTitle(props: HeadingProps) {
  const { children } = props;
  return (
    <header className={Styles.container()}>
      <Heading level={1}>{children}</Heading>
    </header>
  );
}

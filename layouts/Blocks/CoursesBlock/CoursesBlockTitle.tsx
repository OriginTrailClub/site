import * as Styles from './CoursesBlockTitle.styles';

import { Heading, HeadingProps } from 'components/Typography';

export type CoursesBlockTitleProps = Pick<HeadingProps, 'children'>;

export function CoursesBlockTitle(props: CoursesBlockTitleProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Heading level={2}>{children}</Heading>
    </div>
  );
}

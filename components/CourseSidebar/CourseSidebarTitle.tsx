import * as Styles from './CourseSidebarTitle.styles';

import { Heading, HeadingProps } from 'components/Typography';

export type CourseSidebarTitleProps = Pick<HeadingProps, 'children'>;

export function CourseSidebarTitle(props: CourseSidebarTitleProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Heading level={2} style={3}>{children}</Heading>
    </div>
  );
}

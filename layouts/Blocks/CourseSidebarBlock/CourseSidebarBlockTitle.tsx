import * as Styles from './CourseSidebarBlockTitle.styles';

import { Heading, HeadingProps } from 'components/Typography';

export type CourseSidebarBlockTitleProps = Pick<HeadingProps, 'children'>;

export function CourseSidebarBlockTitle(props: CourseSidebarBlockTitleProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Heading level={2} style={3}>{children}</Heading>
    </div>
  );
}

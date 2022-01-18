import * as Styles from './CoursesBlockCourse.styles';

import { CoursesBlockImageProps } from './CoursesBlockImage';
import { CoursesBlockContentProps } from './CoursesBlockContent';
import { MouseEventHandler } from 'react';

type CoursesBlockCourseElements = React.ReactElement<
  CoursesBlockImageProps | CoursesBlockContentProps
>;

export interface CoursesBlockCourseProps {
  children: CoursesBlockCourseElements[];
  href: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
  onMouseEnter: MouseEventHandler<HTMLAnchorElement>;
}

export function CoursesBlockCourse(props: CoursesBlockCourseProps) {
  const { children } = props;

  return (
    <article className={Styles.container()}>
      <a {...props} className={Styles.link()}>{children}</a>
    </article>
  );
}

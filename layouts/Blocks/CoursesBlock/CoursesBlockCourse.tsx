import * as Styles from './CoursesBlockCourse.styles';

import { CoursesBlockImageProps } from './CoursesBlockImage';
import { CoursesBlockContentProps } from './CoursesBlockContent';

type CoursesBlockCourseElements = React.ReactElement<
  CoursesBlockImageProps | CoursesBlockContentProps
>;

export interface CoursesBlockCourseProps {
  children: CoursesBlockCourseElements[];
}

export function CoursesBlockCourse(props: CoursesBlockCourseProps) {
  const { children } = props;

  return <article className={Styles.container()}>{children}</article>;
}

import * as Styles from './CoursesBlockCourses.styles';

import { CoursesBlockCourseProps } from './CoursesBlockCourse';

type CoursesBlockCoursesElements = React.ReactElement<CoursesBlockCourseProps>;

export interface CoursesBlockCoursesProps {
  children: CoursesBlockCoursesElements[];
}

export function CoursesBlockCourses(props: CoursesBlockCoursesProps) {
  const { children } = props;

  return <div className={Styles.container()}>{children}</div>;
}

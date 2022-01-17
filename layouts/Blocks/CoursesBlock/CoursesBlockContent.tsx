import * as Styles from './CoursesBlockContent.styles';

import { CoursesBlockSubjectProps } from './CoursesBlockSubject';
import { CoursesBlockAuthorProps } from './CoursesBlockAuthor';
import { CoursesBlockDescriptionProps } from './CoursesBlockDescription';

type CoursesBlockContentElements = React.ReactElement<
  | CoursesBlockSubjectProps
  | CoursesBlockAuthorProps
  | CoursesBlockDescriptionProps
>;

export interface CoursesBlockContentProps {
  children: CoursesBlockContentElements[];
}

export function CoursesBlockContent(props: CoursesBlockContentProps) {
  const { children } = props;

  return <div className={Styles.container()}>{children}</div>;
}

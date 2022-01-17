import * as Styles from './CoursesBlockSubject.styles';

import { Heading, HeadingProps } from 'components/Typography';

export type CoursesBlockSubjectProps = Pick<HeadingProps, 'children'>;

export function CoursesBlockSubject(props: CoursesBlockSubjectProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Heading level={3}>{children}</Heading>
    </div>
  );
}

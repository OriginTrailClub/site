import * as Styles from './CoursesBlockAuthor.styles';

export interface CoursesBlockAuthorProps {
  name: string;
}

export function CoursesBlockAuthor(props: CoursesBlockAuthorProps) {
  const { name } = props;

  return <span className={Styles.container()}>By {name}</span>;
}

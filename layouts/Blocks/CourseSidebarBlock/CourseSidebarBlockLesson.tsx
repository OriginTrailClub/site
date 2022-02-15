import * as Styles from './CourseSidebarBlockLesson.styles';

export interface CourseSidebarBlockLessonProps {
  label: string;
}

export function CourseSidebarBlockLesson(props: CourseSidebarBlockLessonProps) {
  const { label, ...otherProps } = props;

  return (
    <li className={Styles.container()}>
      <a className={Styles.link()} {...otherProps}>
        {label}
      </a>
    </li>
  );
}

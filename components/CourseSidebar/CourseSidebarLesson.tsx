import * as Styles from './CourseSidebarLesson.styles';

export interface CourseSidebarLessonProps {
  label: string;
}

export function CourseSidebarLesson(props: CourseSidebarLessonProps) {
  const { label, ...otherProps } = props;

  return (
    <li className={Styles.container()}>
      <a className={Styles.link()} {...otherProps}>
        {label}
      </a>
    </li>
  );
}

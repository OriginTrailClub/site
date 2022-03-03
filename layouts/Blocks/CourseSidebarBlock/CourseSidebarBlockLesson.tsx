import * as React from 'react';

import * as Styles from './CourseSidebarBlockLesson.styles';

export interface CourseSidebarBlockLessonProps {
  label: string;
}

export const CourseSidebarBlockLesson = React.forwardRef(function CourseSidebarBlockLesson(
  props: CourseSidebarBlockLessonProps,
  ref: React.Ref<HTMLAnchorElement>
) {
  const { label, ...otherProps } = props;

  return (
    <li className={Styles.container()}>
      <a className={Styles.link()} {...otherProps} ref={ref}>
        {label}
      </a>
    </li>
  );
});

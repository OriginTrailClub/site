import * as React from 'react';

import * as Styles from './CourseSidebarBlockLesson.styles';

export interface CourseSidebarBlockLessonProps {
  label: string;
  children?: React.ReactNode;
  isActive?: boolean;
}

export const CourseSidebarBlockLesson = React.forwardRef(
  function CourseSidebarBlockLesson(
    props: CourseSidebarBlockLessonProps,
    ref: React.Ref<HTMLAnchorElement>
  ) {
    const { label, children, isActive = false, ...otherProps } = props;

    const hasChapters = React.Children.count(children) > 0;

    return (
      <li className={Styles.container({ hasChapters })}>
        <a className={Styles.link({ isActive })} {...otherProps} ref={ref}>
          {label}
        </a>
        {hasChapters ? <ul className={Styles.chapters()}>{children}</ul> : null}
      </li>
    );
  }
);

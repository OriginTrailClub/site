import * as React from 'react';

import * as Styles from './CourseSidebarBlockChapter.styles';

export interface CourseSidebarBlockChapterProps {
  label: string;
  isActive: boolean;
}

export const CourseSidebarBlockChapter = React.forwardRef(
  function CourseSidebarBlockChapter(
    props: CourseSidebarBlockChapterProps,
    ref: React.Ref<HTMLAnchorElement>
  ) {
    const { label, isActive = false, ...otherProps } = props;

    return (
      <li className={Styles.container()}>
        <a className={Styles.link({ isActive })} {...otherProps} ref={ref}>
          {label}
        </a>
      </li>
    );
  }
);

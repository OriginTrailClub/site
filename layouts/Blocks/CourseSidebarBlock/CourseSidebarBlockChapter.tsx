import * as React from 'react';

import * as Styles from './CourseSidebarBlockChapter.styles';

export interface CourseSidebarBlockChapterProps {
  label: string;
}

export const CourseSidebarBlockChapter = React.forwardRef(
  function CourseSidebarBlockChapter(
    props: CourseSidebarBlockChapterProps,
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
  }
);

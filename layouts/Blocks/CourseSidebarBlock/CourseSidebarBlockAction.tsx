import * as React from 'react';

import * as Styles from './CourseSidebarBlockAction.styles';

import { Button, ButtonProps } from 'components/Button';

export type CourseSidebarBlockActionProps = Omit<ButtonProps, 'variant'>;

export const CourseSidebarBlockAction = React.forwardRef(
  function CourseSidebarBlockAction(
    props: CourseSidebarBlockActionProps,
    ref: React.Ref<HTMLButtonElement>
  ) {
    return (
      <div className={Styles.container()}>
        <Button {...props} ref={ref} />
      </div>
    );
  }
);

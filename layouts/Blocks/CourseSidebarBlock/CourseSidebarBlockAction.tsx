import * as Styles from './CourseSidebarBlockAction.styles';

import { Button, ButtonProps } from 'components/Button';

export type CourseSidebarBlockActionProps = Omit<ButtonProps, 'variant'>;

export function CourseSidebarBlockAction(props: ButtonProps) {
  return (
    <div className={Styles.container()}>
      <Button {...props} />
    </div>
  );
}

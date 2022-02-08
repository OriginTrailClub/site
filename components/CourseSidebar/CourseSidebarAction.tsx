import * as Styles from './CourseSidebarAction.styles';

import { Button, ButtonProps } from 'components/Button';

export type CourseSidebarActionProps = Omit<ButtonProps, 'variant'>;

export function CourseSidebarAction(props: ButtonProps) {
  return (
    <div className={Styles.container()}>
      <Button {...props} />
    </div>
  );
}

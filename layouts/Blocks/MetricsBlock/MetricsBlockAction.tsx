import { Button, ButtonProps } from 'components/Button';

import * as Styles from './MetricsBlockAction.styles';

export type MetricsBlockActionProps = Omit<ButtonProps, 'variant'>;

export function MetricsBlockAction(props: MetricsBlockActionProps) {
  return (
    <div className={Styles.container()}>
      <Button {...props} variant="tertiary" />
    </div>
  );
}

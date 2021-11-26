import * as React from 'react';

import * as Styles from './IntroBlockAction.styles';

import { Button, ButtonProps } from 'components/Button';

export type IntroBlockActionProps = Omit<ButtonProps, 'variant'>;

export function IntroBlockAction(props: IntroBlockActionProps) {
  return (
    <div className={Styles.container()}>
      <Button {...props} variant="secondary" />
    </div>
  );
}

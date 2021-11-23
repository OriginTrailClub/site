import * as React from 'react';

import * as Styles from './IntroductionBlockAction.styles';

import { Button, ButtonProps } from 'components/Button';

export type IntroductionBlockActionProps = ButtonProps;

export function IntroductionBlockAction(props: IntroductionBlockActionProps) {
  return (
    <div className={Styles.container()}>
      <Button {...props} />
    </div>
  );
}

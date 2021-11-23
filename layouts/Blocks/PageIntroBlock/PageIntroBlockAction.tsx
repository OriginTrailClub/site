import * as React from 'react';

import * as Styles from './PageIntroBlockAction.styles';

import { Button, ButtonProps } from 'components/Button';

export type PageIntroBlockActionProps = ButtonProps;

export function PageIntroBlockAction(props: PageIntroBlockActionProps) {
  return (
    <div className={Styles.container()}>
      <Button {...props} />
    </div>
  );
}

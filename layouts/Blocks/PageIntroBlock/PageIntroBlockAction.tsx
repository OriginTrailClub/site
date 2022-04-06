import * as React from 'react';

import * as Styles from './PageIntroBlockAction.styles';

import { Button, ButtonProps } from 'components/Button';

export type PageIntroBlockActionProps = ButtonProps;

export const PageIntroBlockAction = React.forwardRef<
  HTMLButtonElement,
  PageIntroBlockActionProps
>(function PageIntroBlockAction(props, ref) {
  return (
    <div className={Styles.container()}>
      <Button ref={ref} {...props} />
    </div>
  );
});

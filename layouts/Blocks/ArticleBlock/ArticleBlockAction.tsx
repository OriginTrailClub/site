import * as React from 'react';

import * as Styles from './ArticleBlockAction.styles';

import { Button, ButtonProps } from 'components/Button';

export type ArticleBlockActionProps = Omit<ButtonProps, 'variant'>;

export function ArticleBlockAction(props: ArticleBlockActionProps) {
  return (
    <div className={Styles.container()}>
      <Button {...props} variant="secondary" />
    </div>
  );
}

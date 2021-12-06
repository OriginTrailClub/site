import * as React from 'react';

import * as Styles from './ProductsBlockAction.styles';

import { Button, ButtonProps } from 'components/Button';

export type ProductsBlockActionProps = Omit<ButtonProps, 'variant'>;

export function ProductsBlockAction(props: ProductsBlockActionProps) {
  return (
    <div className={Styles.container()}>
      <Button {...props} variant="secondary" />
    </div>
  );
}

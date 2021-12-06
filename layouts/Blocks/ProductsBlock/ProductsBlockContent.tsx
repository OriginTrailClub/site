import * as React from 'react';

import { Accordion } from 'components/Accordion';

import * as Styles from './ProductsBlockContent.styles';

import { ProductsBlockImageProps } from './ProductsBlockImage';
import { ProductsBlockDescriptionProps } from './ProductsBlockDescription';
import { ProductsBlockActionProps } from './ProductsBlockAction';

type ProductsBlockContentElements = React.ReactElement<
  | ProductsBlockDescriptionProps
  | ProductsBlockImageProps
  | ProductsBlockActionProps
>;

export interface ProductsBlockContentProps {
  children: ProductsBlockContentElements[];
}

export function ProductsBlockContent(props: ProductsBlockContentProps) {
  const { children } = props;

  return (
    <Accordion.Content>
      <div className={Styles.container()}>{children}</div>
    </Accordion.Content>
  );
}

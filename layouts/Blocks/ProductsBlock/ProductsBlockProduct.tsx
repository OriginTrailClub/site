import * as React from 'react';

import { ProductsBlockHeaderProps } from './ProductsBlockHeader';
import { ProductsBlockContentProps } from './ProductsBlockContent';

import { ProductsBlockProductContext } from './ProductsBlockProductContext';
import { ProductsBlockContext } from './ProductsBlockContext';

type ProductsBlockProductElements = React.ReactElement<
  ProductsBlockHeaderProps | ProductsBlockContentProps
>;

export interface ProductsBlockProductProps {
  children: ProductsBlockProductElements[];

  value: string;
}

export function ProductsBlockProduct(props: ProductsBlockProductProps) {
  const { value } = props;

  const { state } = React.useContext(ProductsBlockContext);
  const { setProductImage } = state;

  const setImage = React.useCallback(
    (props) => {
      setProductImage(value, props);
    },
    [setProductImage, value]
  );

  return (
    <ProductsBlockProductContext.Provider
      value={{
        state: {
          setImage,
        },
      }}
    >
      {props.children}
    </ProductsBlockProductContext.Provider>
  );
}

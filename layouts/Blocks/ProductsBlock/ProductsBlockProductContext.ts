import * as React from 'react';

import { ProductsBlockImageProps } from './ProductsBlockImage';

interface ProductsBlockProductContext<T> {
  state: {
    setImage: (props: ProductsBlockImageProps) => any;
  };
}

export const ProductsBlockProductContext = React.createContext<
  ProductsBlockProductContext<any>
>(null!);

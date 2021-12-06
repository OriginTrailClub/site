import * as React from 'react';

import { ProductsBlockImageProps } from './ProductsBlockImage';

interface ProductsBlockContext<T> {
  state: {
    setProductImage: (value: React.Key, props: ProductsBlockImageProps) => any;
  };
}

export const ProductsBlockContext = React.createContext<
  ProductsBlockContext<any>
>(null!);

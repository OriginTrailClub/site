import * as React from 'react';

import { ProductsBlockProductContext } from './ProductsBlockProductContext';

export interface ProductsBlockImageProps {
  src: string;
  alt: string;
}

export function ProductsBlockImage(props: ProductsBlockImageProps) {
  const { state } = React.useContext(ProductsBlockProductContext);

  const { setImage } = state;

  React.useEffect(() => {
    setImage(props);
  }, [props, setImage]);

  return null;
}

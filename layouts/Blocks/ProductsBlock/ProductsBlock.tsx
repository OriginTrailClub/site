import * as React from 'react';

import Image from 'next/image';

import { Accordion } from 'components/Accordion';

import * as Styles from './ProductsBlock.styles';

import { ProductsBlockContext } from './ProductsBlockContext';

import {
  ProductsBlockProduct,
  ProductsBlockProductProps,
} from './ProductsBlockProduct';
import {
  ProductsBlockHeader,
  ProductsBlockHeaderProps,
} from './ProductsBlockHeader';
import {
  ProductsBlockContent,
  ProductsBlockContentProps,
} from './ProductsBlockContent';
import {
  ProductsBlockImage,
  ProductsBlockImageProps,
} from './ProductsBlockImage';
import {
  ProductsBlockDescription,
  ProductsBlockDescriptionProps,
} from './ProductsBlockDescription';
import {
  ProductsBlockAction,
  ProductsBlockActionProps,
} from './ProductsBlockAction';

type ProductsBlockElements = React.ReactElement<ProductsBlockProductProps>;

export interface ProductsBlockProps {
  children: ProductsBlockElements[];
}

interface IProductsBlockComposition {
  Product: React.FC<ProductsBlockProductProps>;
  Header: React.FC<ProductsBlockHeaderProps>;
  Content: React.FC<ProductsBlockContentProps>;
  Image: React.FC<ProductsBlockImageProps>;
  Description: React.FC<ProductsBlockDescriptionProps>;
  Action: React.FC<ProductsBlockActionProps>;
}

const getDefaultExpandedKeys = (props: ProductsBlockProps): React.Key[] => {
  const children = React.Children.toArray(
    props.children
  ) as ProductsBlockProps['children'];

  const firstChild = children[0];

  return [firstChild?.props?.value];
};

export const ProductsBlock: React.FC<ProductsBlockProps> &
  IProductsBlockComposition = function ProductsBlock(props) {
  const defaultExpandedKeys = getDefaultExpandedKeys(props);

  const [lastExpandedKey, setLastExpandedKey] = React.useState(
    () => defaultExpandedKeys[0]
  );
  const [images, setImages] = React.useState(
    {} as Record<string, ProductsBlockImageProps>
  );

  const onExpandedChange = React.useCallback(
    (keys: Set<React.Key>) => {
      let expandedKeys = Array.from(keys);

      setLastExpandedKey(expandedKeys?.[expandedKeys.length - 1]);
    },
    [setLastExpandedKey]
  );

  const setProductImage = React.useCallback(
    (value, props) => {
      setImages((prevImages) => ({
        ...prevImages,
        [value]: props,
      }));
    },
    [setImages]
  );

  const image = images[lastExpandedKey];

  console.log(image, images);

  return (
    <ProductsBlockContext.Provider
      value={{
        state: {
          setProductImage,
        },
      }}
    >
      <div className={Styles.container()}>
        <div className={Styles.contents()}>
          <div className={Styles.accordion()}>
            <Accordion
              defaultExpandedKeys={defaultExpandedKeys}
              onExpandedChange={onExpandedChange}
            >
              {React.Children.map(
                props.children as ProductsBlockProps['children'],
                (child) => (
                  <Accordion.Item value={child.props.value}>
                    {child}
                  </Accordion.Item>
                )
              )}
            </Accordion>
          </div>
          <div className={Styles.image()}>
            {image ? (
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={624}
                height={624}
              />
            ) : null}
          </div>
        </div>
      </div>
    </ProductsBlockContext.Provider>
  );
};

ProductsBlock.Product = ProductsBlockProduct;
ProductsBlock.Header = ProductsBlockHeader;
ProductsBlock.Content = ProductsBlockContent;
ProductsBlock.Image = ProductsBlockImage;
ProductsBlock.Description = ProductsBlockDescription;
ProductsBlock.Action = ProductsBlockAction;

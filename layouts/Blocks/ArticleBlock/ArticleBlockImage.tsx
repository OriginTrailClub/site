import * as React from 'react';

import * as Styles from './ArticleBlockImage.styles';

import Image from 'next/image';

export interface ArticleBlockImageProps {
  src: string;
  alt: string;
}

export function ArticleBlockImage(props: ArticleBlockImageProps) {
  const { src, alt } = props;

  return (
    <div className={Styles.container()}>
      <div className={Styles.aspectRatioBox()}>
        <div className={Styles.aspectRatioBoxInside()}>
          <Image src={src} alt={alt} layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
}

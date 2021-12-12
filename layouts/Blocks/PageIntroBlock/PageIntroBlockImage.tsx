import * as React from 'react';

import * as Styles from './PageIntroBlockImage.styles';

import Image from 'next/image';

export interface PageIntroBlockImageProps {
  src: string;
  alt: string;
}

export function PageIntroBlockImage(props: PageIntroBlockImageProps) {
  const { src, alt } = props;

  return (
    <div className={Styles.container()}>
      <div className={Styles.aspectRatioBox()}>
        <div className={Styles.aspectRatioBoxInside()}>
          <div className={Styles.image()}>
            <Image
              priority
              src={src}
              alt={alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

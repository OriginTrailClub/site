import * as React from 'react';

import * as Styles from './IntroductionBlockImage.styles';

import Image from 'next/image';

export interface IntroductionBlockImageProps {
  src: string;
  alt: string;
}

export function IntroductionBlockImage(props: IntroductionBlockImageProps) {
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

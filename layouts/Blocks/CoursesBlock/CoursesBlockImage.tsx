import * as React from 'react';

import * as Styles from './CoursesBlockImage.styles';

import Image from 'next/image';

export interface CoursesBlockImageProps {
  src: string;
  alt: string;
}

export function CoursesBlockImage(props: CoursesBlockImageProps) {
  const { src, alt } = props;

  return (
    <div className={Styles.container()}>
      <div className={Styles.aspectRatioBox()}>
        <div className={Styles.aspectRatioBoxInside()}>
          <div className={Styles.image()}>
            <Image src={src} alt={alt} layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

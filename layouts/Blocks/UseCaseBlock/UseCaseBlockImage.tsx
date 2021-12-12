import * as Styles from './UseCaseBlockImage.styles';

import Image from 'next/image';

export interface UseCaseBlockImageProps {
  src: string;
  alt: string;
}

export function UseCaseBlockImage(props: UseCaseBlockImageProps) {
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

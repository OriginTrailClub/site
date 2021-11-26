import * as Styles from './ParticipantsBlockImage.styles';

import Image from 'next/image';

export interface ParticipantsBlockImageProps {
  src: string;
  alt: string;
}

export function ParticipantsBlockImage(props: ParticipantsBlockImageProps) {
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

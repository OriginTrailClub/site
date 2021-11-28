import * as Styles from './SolutionsBlockImage.styles';

import Image from 'next/image';

export interface SolutionsBlockImageProps {
  src: string;
  alt: string;
}

export function SolutionsBlockImage(props: SolutionsBlockImageProps) {
  const { src, alt } = props;

  return (
    <div className={Styles.container()}>
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  );
}

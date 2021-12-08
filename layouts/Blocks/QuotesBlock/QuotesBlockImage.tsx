import * as Styles from './QuotesBlockImage.styles';

import Image from 'next/image';

export interface QuotesBlockImageProps {
  src: string;
  alt: string;
}

export function QuotesBlockImage(props: QuotesBlockImageProps) {
  const { src, alt } = props;

  return (
    <div className={Styles.container()}>
      <Image src={src} alt={alt} layout="responsive" width={310} height={413} />
    </div>
  );
}

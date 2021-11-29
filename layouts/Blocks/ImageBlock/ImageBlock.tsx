import Image from 'next/image';

import * as Styles from './ImageBlock.styles';

export interface ImageBlockProps {
  src: string,
  alt: string,
}

export function ImageBlock(props: ImageBlockProps) {
    const { src, alt } = props;

    return (
        <div className={Styles.container()}>
            <div className={Styles.contents()}>
                <Image src={src} alt={alt} layout="fill" objectFit="contain" />
            </div>
        </div>
    );
}
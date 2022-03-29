import * as Styles from './Image.styles';

import NextImage from 'next/image';

export type ImageProps = {
    src: string;
    alt: string;
    width: string;
    height: string;
}

export function Image(props: ImageProps) {
    const { src, alt, width, height } = props;

    return (
        <figure className={Styles.container()}>
            <NextImage src={src} alt={alt} layout="responsive" width={width} height={height} />
            <figcaption className={Styles.label()}>{alt}</figcaption>
        </figure>
    )
}
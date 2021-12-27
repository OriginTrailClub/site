import * as Stitches from '@stitches/react';
import Image from 'next/image';

import * as React from 'react';

import * as Styles from './ImageBlockImage.styles';

export interface ImageBlockImageProps {
    src: string;
    alt: string;

    minBreakpoint?: '@bp1' | '@bp2' | '@bp3' | '@bp4' | undefined,
    maxBreakpoint?: '@bp1' | '@bp2' | '@bp3' | '@bp4' | undefined,

    ratio?: number,
}  

export function ImageBlockImage(props: ImageBlockImageProps) {
    const { src, alt, minBreakpoint, maxBreakpoint, ratio = 0.33 } = props;

    let css = {
        pb: `calc(${ratio} * 100%)`
    } as Stitches.CSS;

    if (minBreakpoint) {
        css['display'] = 'none';
        css[minBreakpoint] = {
            display: 'flex',
        }
    }

    if (maxBreakpoint) {
        css[maxBreakpoint] = {
            display: 'flex',
        }
    }

    return (
        <div className={Styles.container({
            css,
        })}>
            <Image src={src} alt={alt} layout="fill" objectFit="contain" />
        </div>
    )
}
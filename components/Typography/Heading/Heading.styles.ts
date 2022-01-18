import { css } from 'stitches.config';

export const container = css({
    fontFamily: '$header',
    lineHeight: '$header',
    color: '$text-header',
    m: 0,

    variants: {
        level: {
            1: {
                fontWeight: '$extra-bold',
                fontSize: '$header-1',
            },
            2: {
                fontWeight: '$bold',
                fontSize: '$header-2',
            },
            3: {
                fontWeight: '$semi-bold',
                fontSize: '$header-3',
            },
            4: {
                fontWeight: '$semi-bold',
                fontSize: '$header-4',
            },
        },
    },
});
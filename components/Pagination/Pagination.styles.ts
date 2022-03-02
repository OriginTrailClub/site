import { css } from 'stitches.config';

export const container = css({
    display: 'grid',
    width: '100%',
    alignItems: 'center',

    gridTemplateAreas: '"previous next"',
    gridTemplateColumns: '1fr 1fr',
});
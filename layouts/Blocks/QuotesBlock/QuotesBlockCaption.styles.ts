import { css } from 'stitches.config';

export const container = css({
    mt: '$large',
    display: 'flex',
    flexDirection: 'column',
    mr: 'calc(88px + $regular)',
    minHeight: '$space$x-large',
    justifyContent: 'center',

    '@bp3': {
        minHeight: 'auto',
    }
});
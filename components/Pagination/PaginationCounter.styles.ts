import { css } from 'stitches.config';

export const container = css({
    display: 'flex',
    justifyContent: 'center',

    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 3,

    fontSize: '$button',
    lineHeight: '$none',
    fontFamily: '$default',

    color: '$text-subtle'

});
import { css } from 'stitches.config';

export const contents = css({
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns:
    'calc($space$regular + 1px) 1fr calc($space$regular + 1px)',

  '@bp2': {
    maxWidth: 'calc((1234px - 2px) / 2)',

    '&:before': {
      content: '',
      position: 'absolute',
      top: 0,
      right: -1,
      bottom: -1,
      width: 1,
      height: 'calc(100% + 2px)',
      backgroundColor: '$gray-200',
    },

    '&:after': {
      content: '',
      position: 'absolute',
      top: -1,
      bottom: -1,
      left: -1,
      width: 1,
      height: 'calc(100% + 2px)',
      backgroundColor: '$gray-200',
    },
  },
});

export const container = css({
  '&:before': {
    content: '',
    position: 'absolute',
    top: -1,
    right: 0,
    left: 0,
    height: 1,
    width: '100%',
    backgroundColor: '$gray-200',
  },

  '&:after': {
    content: '',
    position: 'absolute',
    right: 0,
    bottom: -1,
    left: 0,
    height: 1,
    width: '100%',
    backgroundColor: '$gray-200',
  },

  '@bp2': {
    [`&:nth-of-type(2n + 1) > .${contents}`]: {
      ml: 'auto',
    },
    [`&:nth-of-type(2n + 2) > .${contents}`]: {
      mr: 'auto',
    },
  },
});

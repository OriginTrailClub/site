import { css } from 'stitches.config';

export const container = css({
  gridColumnStart: 2,
  gridColumnEnd: 3,
  gridRowStart: 1,
  gridRowEnd: 2,
  p: '$regular',

  display: 'grid',

  gridTemplateRows: 'auto min-content 1fr',
  gridTemplateColumns: 'max-content 1fr',
  gridTemplateAreas: `
    "image       action     "
    "title       title      "
    "description description"
  `,

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: -1,
    bottom: 0,
    width: 1,
    backgroundColor: '$gray-200',
  },

  '&:after': {
    content: '',
    position: 'absolute',
    top: 0,
    right: -1,
    bottom: 0,
    width: 1,
    backgroundColor: '$gray-200',
  },
});

export const flip = css({
  gridArea: 'action',
  ml: 'auto',
});

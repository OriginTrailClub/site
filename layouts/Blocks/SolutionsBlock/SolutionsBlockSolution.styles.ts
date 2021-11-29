import { css } from 'stitches.config';

export const container = css({
  gridColumnStart: 1,
  gridColumnEnd: 4,
  gridRowStart: 1,
  gridRowEnd: 2,
  backgroundColor: '$indigo-50',
  px: 'calc($regular + 1px)',
});

export const content = css({
  display: 'grid',

  gridTemplateRows: 'auto min-content 1fr',
  gridTemplateColumns: 'max-content 1fr',
  gridTemplateAreas: `
    "image       action     "
    "title       title      "
    "description description"
  `,

  p: '$regular',
});

export const close = css({
  gridArea: 'action',
  ml: 'auto',
});

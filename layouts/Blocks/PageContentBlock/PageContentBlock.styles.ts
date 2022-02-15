import { css } from 'stitches.config';

export const container = css({
  display: 'grid',
  gridTemplateColumns: 'auto',
  gridTemplateRows: 'auto auto',

  gridTemplateAreas: `
      'title'
      'links'
    `,

  borderLeftWidth: 1,
  borderLeftStyle: 'solid',
  borderLeftColor: '$gray-200',
});

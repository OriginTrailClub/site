import { css } from 'stitches.config';

export const container = css({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gridTemplateRows: 'auto auto',

  gridTemplateAreas: `
      'title    action  '
      'sections sections'
    `,
});

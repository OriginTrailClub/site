import { css } from 'stitches.config';

export const container = css({
  display: 'grid',

  gridTemplateAreas: `
      "title    action "
      "metrics  metrics"
    `,

  gridTemplateColumns: '1fr min-content',
  gridTemplateRows: 'min-content 1fr',
});

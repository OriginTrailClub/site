import { css } from 'stitches.config';

export const container = css({
  display: 'grid',
  gridGap: '1px',
  py: 1,

  '@bp2': {
    gridTemplateColumns: '1fr 1fr',
  },
});

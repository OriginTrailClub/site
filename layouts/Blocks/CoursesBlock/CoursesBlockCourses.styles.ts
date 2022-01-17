import { css } from 'stitches.config';

export const container = css({
  display: 'grid',
  width: '100%',

  gridGap: '$regular',

  '@bp1': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@bp3': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
});

import { css } from 'stitches.config';

export const container = css({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'max-content',
  m: 0,
  zIndex: 1,

  '@bp3': {
    gridTemplateColumns: '33% 1fr',
    px: '$regular',
  },

  '@bp4': {
    gridTemplateColumns: '25% 1fr',
  },
});

import { css } from 'stitches.config';

export const container = css({
  gridArea: 'sidebar',

  display: 'none',

  '@bp3': {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const sticky = css({
  position: 'sticky',
  top: '$large',
});

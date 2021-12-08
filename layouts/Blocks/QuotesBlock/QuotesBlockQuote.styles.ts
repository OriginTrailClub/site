import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  alignItems: 'center',
  px: '$regular',

  '@bp3': {
    px: '$none',
    ml: 'calc($large + $regular)',
  },

  '@bp4': {
    ml: 'calc($x-large + $large)',
  },
});

export const contents = css({
  mb: '$large',

  '@bp3': {
    my: 'calc($large + $regular)',
  },

  '@bp4': {
    my: '$x-large',
  },
});

import { css } from 'stitches.config';

export const container = css({
  mt: 'auto',
  position: 'absolute',
  bottom: 0,
  right: '$regular',
  width: 88,
  mr: '$small',
  mb: '$small',

  '@bp3': {
    position: 'relative',
    right: 'auto',
    bottom: 'auto',
    width: '100%',
    mr: '$none',
    mb: '$none',
  },
});

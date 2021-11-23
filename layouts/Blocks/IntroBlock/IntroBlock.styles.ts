import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  px: '$regular',
});

export const contents = css({
  width: '100%',
  maxWidth: 'min(720px, 80ch)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  px: '$large',

  '@bp2': {
    px: '$none',
  },
});

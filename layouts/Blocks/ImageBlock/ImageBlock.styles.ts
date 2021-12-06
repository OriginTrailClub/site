import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  width: '100%',
  px: '$regular',
  justifyContent: 'center',
});

export const contents = css({
  display: 'flex',
  maxWidth: 1234,
  width: '100%',
  paddingBottom: 'min(calc(100% / 3 * 2), 360px)',
  position: 'relative',
});

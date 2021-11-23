import { css } from 'stitches.config';

export const container = css({
  p: '$regular',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
});

export const contents = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: 1234,
  width: '100%',
});

export const logo = css({
  display: 'flex',
  height: '100%',
  maxHeight: 64,
  maxWidth: 210,
  width: '100%',
  mr: '$small',
});

export const callToAction = css({
  ml: '$small',
});

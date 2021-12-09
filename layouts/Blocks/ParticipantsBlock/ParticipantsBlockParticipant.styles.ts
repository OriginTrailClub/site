import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  flexDirection: 'column',
});

export const contents = css({
  ml: 'calc($small / 2)',
  mr: 'calc($small / 2)',
  mt: '$small',
  mb: '$regular',

  px: '$small',
  pt: '$small',
  pb: '$regular',
});

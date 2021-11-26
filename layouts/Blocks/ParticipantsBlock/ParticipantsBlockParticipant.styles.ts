import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  flexDirection: 'column',
});

export const contents = css({
  marginLeft: 'calc($small / 2)',
  marginRight: 'calc($small / 2)',
  marginTop: '$small',
  marginBottom: '$regular',

  px: '$small',
  pt: '$small',
  pb: '$regular',
});

import { css } from 'stitches.config';

export const container = css({
  display: 'block',
  flexDirection: 'column',

  m: 0,
  pl: '2ch',

  '& &': {
    mb: '$small',
    mt: '$xx-small',
  },
});

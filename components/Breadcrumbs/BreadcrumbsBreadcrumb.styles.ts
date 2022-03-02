import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  justifyContent: 'center',
});

export const link = css({
  color: '$text-subtle',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
});

export const icon = css({
  display: 'flex',
  alignItems: 'center',

  pl: '$small',
});

import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const link = css({
  color: '$text-subtle',
  textDecoration: 'none',
  fontWeight: '$medium',
  fontFamily: '$mono',
  fontSize: '$button',
  lineHeight: '$none',

  py: '$small',
  px: '$x-small',

  my: '-$small',
  mx: '-$x-small',

  '&:hover': {
    textDecoration: 'underline',
  },

  variants: {
    current: {
      true: {
        color: '$indigo-600',
      },
    },
  },
});

export const icon = css({
  display: 'flex',
  alignItems: 'center',

  height: '$fontSizes$button',
  width: '$fontSizes$button',

  color: '$text-body',

  flexShrink: 0,
  flexGrow: 0,

  ml: '$small',
});

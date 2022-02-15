import { css } from 'stitches.config';

export const link = css({
  textDecoration: 'none',
  fontFamily: '$mono',
  fontWeight: '$semi-bold',
  color: '$text-subtle',

  fontSize: '$button',
  lineHeight: '$body',

  width: '100%',
});

export const container = css({
  px: '$regular',
  py: '$small',

  display: 'flex',

  borderWidth: 1,
  borderColor: 'transparent',
  borderStyle: 'solid',
  m: -1,

  '&:before': {
    content: '',

    position: 'absolute',

    top: -1,
    bottom: -1,

    left: -3,
    width: 2,
  },

  '&:hover': {
    borderColor: '$indigo-100',
    backgroundColor: '$indigo-50',

    '&:before': {
      backgroundColor: '$indigo-600',
    },

    [`.${link()}`]: {
      color: '$indigo-600',
    },
  },
});

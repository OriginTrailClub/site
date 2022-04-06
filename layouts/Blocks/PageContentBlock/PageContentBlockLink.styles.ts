import { css } from 'stitches.config';

export const link = css({
  textDecoration: 'none',
  fontFamily: '$mono',
  fontWeight: '$semi-bold',
  color: '$text-subtle',

  fontSize: '$button',
  lineHeight: '$body',

  width: '100%',

  px: '$regular',
  py: '$small',

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

  '&:hover, &:focus': {
    color: '$indigo-600',

    '&:before': {
      backgroundColor: '$indigo-600',
    },
  },

  variants: {
    isActive: {
      true: {
        borderColor: '$indigo-100',
        backgroundColor: '$indigo-50',

        color: '$indigo-600',

        '&:before': {
          backgroundColor: '$indigo-600',
        },
      },
    },
  },
});

export const container = css({
  display: 'flex',
});

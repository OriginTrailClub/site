import { css } from 'stitches.config';

export const label = css({
  color: 'currentColor',
  fontSize: '$button',
  fontFamily: '$mono',
  fontWeight: '$semi-bold',
  lineHeight: '$none',
  p: '$small',
});

export const iconWrapper = css({
  p: '$small',
  display: 'flex',
});

export const icon = css({
  color: 'currentColor',
  display: 'flex',
  alignItems: 'center',
  width: '$fontSizes$button',
  height: '$fontSizes$button',
});

export const container = css({
  border: 'none',
  p: '$small',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',

  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'transparent',

  variants: {
    variant: {
      primary: {
        color: 'white',
        backgroundColor: '$indigo-600',
        borderColor: '$indigo-300',
        '&:hover': {
          backgroundColor: '$indigo-500',
          borderColor: '$indigo-100',
        },
        '&:active': {
          backgroundColor: '$indigo-700',
          borderColor: '$indigo-100',
        },
      },
      secondary: {
        color: '$indigo-600',
        backgroundColor: 'transparent',
        borderColor: '$indigo-200',
        '&:hover': {
          backgroundColor: '$indigo-50',
          borderColor: '$indigo-100',
        },
        '&:active': {
          backgroundColor: '$indigo-100',
          borderColor: '$indigo-100',
        },
      },
      tertiary: {
        color: '$indigo-600',
        backgroundColor: 'transparent',
        borderColor: '0 0 0 1px transparent',
        '&:hover': {
          backgroundColor: '$indigo-50',
          borderColor: '$indigo-100',
        },
        '&:active': {
          backgroundColor: '$indigo-100',
          borderColor: '$indigo-100',
        },
      },
    },
  },
});

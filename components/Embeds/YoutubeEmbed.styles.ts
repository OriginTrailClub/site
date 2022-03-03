import { css } from 'stitches.config';

export const aspectRatio = css({
  paddingBottom: '56.25%',
  height: 0,
  width: '100%',
});

export const iframe = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

export const icon = css({
  height: '$fontSizes$header-3',
  width: '$fontSizes$header-3',
  color: '$indigo-600',
});

export const trigger = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$indigo-50',

  p: '$regular',
  borderRadius: '50%',

  height: 'calc($space$regular * 2 + $fontSizes$header-3)',
  width: 'calc($space$regular * 2 + $fontSizes$header-3)',
});

export const placeholder = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',

  p: 0,
  border: 'transparent',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  cursor: 'pointer',

  '&:hover, &:focus': {
    [`& .${icon()}`]: {
      color: '$indigo-700',
    },
  },
});

export const label = css({
  fontFamily: '$mono',
  fontSize: '$caption',
  lineHeight: '$none',
  color: '$text-subtle',

  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  mt: '$regular',
});

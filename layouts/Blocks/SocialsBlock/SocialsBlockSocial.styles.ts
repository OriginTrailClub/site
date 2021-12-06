import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  position: 'relative',

  '&:before': {
    content: '',
    width: '100%',
    paddingBottom: '100%',
    height: 0,
  },
});

export const contents = css({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '$indigo-50',
  textDecoration: 'none',
  p: '$small',

  '@bp2': {
    p: '$regular',
  },
});

export const inner = css({
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const icon = css({
  $$iconSpace: '$space$small',

  width: '100%',
  flexShrink: 1,
  flexGrow: 0,
  minHeight: 0,
  position: 'relative',
  color: '$indigo-700',

  p: '$$iconSpace',

  mb: '$space$x-small',

  '& > svg': {
    width: '100%',
    height: '100%',
  },

  '@bp2': {
    $$iconSpace: '$space$regular',
  },
});

export const label = css({
  color: '$indigo-900',
  fontFamily: '$mono',
  fontSize: '$button',
  lineHeight: '$button',
  fontWeight: '$bold',
  width: '100%',
  textAlign: 'center',
  flexShrink: 0,
  flexGrow: 0,
});

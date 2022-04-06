import { css } from 'stitches.config';

export const container = css({
  width: '100%',
  p: '$regular',

  display: 'flex',
  justifyContent: 'center',
});

export const contents = css({
  display: 'flex',

  maxWidth: 1234,
  width: '100%',

  flexDirection: 'column',

  '@bp2': {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});

export const socials = css({
  display: 'flex',
  listStyle: 'none',
  mb: '-$x-small',
  mx: '-$x-small',
  p: 0,
});

export const social = css({
  display: 'flex',
  p: '$x-small',
  mx: '$xx-small',
  '&:first-of-type': {
    ml: 0,
  },
  '&:last-of-type': {
    mr: 0,
  },
});

export const socialLink = css({
  color: '$gray-600',
  width: 24,
  height: 24,
  '&:hover': {
    color: '$gray-900',
  },
});

export const info = css({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 376,
});

export const aspectRatio = css({
  width: '100%',
  paddingBottom: 'calc(100% / 25 * 7)',
});

export const logo = css({
  maxWidth: 180,
  width: '100%',
  mb: '$regular',
});

export const description = css({
  fontSize: '$body-compact',
  lineHeight: '$body',
  m: 0,
});

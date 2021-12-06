import { css } from 'stitches.config';

export const container = css({
  width: '100%',
  margin: 0,
});

export const trigger = css({
  backgroundColor: 'transparent',
  borderWidth: 0,
  borderColor: 'transparent',
  display: 'flex',
  p: '$small',
  width: '100%',
  alignItems: 'center',
  color: '$text-header',
  textAlign: 'start',
});

export const icon = css({
  width: 32,
  height: 32,
  m: '$small',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const label = css({
  fontSize: '$header-4',
  fontWeight: '$semi-bold',
  fontFamily: '$header',
  lineHeight: '$header',
  p: '$small',
});

export const indicator = css({
  ml: 'auto',

  '& > svg': {
    height: 'calc($fontSizes$header-4 * $lineHeights$header)',
    width: 'calc($fontSizes$header-4 * $lineHeights$header)',
  },
});

import { css } from 'stitches.config';

export const container = css({
  gridArea: 'image',
  mb: '$regular',
  width:
    'calc(2px + ($space$small * 2) + ($space$small * 2) + ($fontSizes$button * $lineHeights$none))',
  height:
    'calc(2px + ($space$small * 2) + ($space$small * 2) + ($fontSizes$button * $lineHeights$none))',
});

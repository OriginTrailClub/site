import { globalCss } from 'stitches.config';

// Linearly Scale font-size with CSS clamp() Based on the Viewport
// Based on: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
const createBaseFontSize = () => ({
  '$$min-fs': 1,
  '$$max-fs': 1.2,
  '$$min-vw': 20,
  '$$max-vw': 45,

  '$$min-fs-rem': '$$min-fs * 1rem',
  '$$max-fs-rem': '$$max-fs * 1rem',
  '$$min-vw-rem': '$$min-vw * 1rem',

  $$slope:
    '($$max-fs - $$min-fs) * (100vw - $$min-vw-rem) / ($$max-vw - $$min-vw)',

  fontSize: 'clamp($$min-fs-rem, $$min-fs-rem + $$slope, $$max-fs-rem)',
});

export const globalStyles = globalCss({
  html: {
    height: '100%',
    width: '100%',
    ...createBaseFontSize(),
  },
  body: {
    margin: 0,
    minHeight: '100%',
    width: '100%',
    fontFamily: '$default',
    color: '$text-body',
    fontSize: '$body-default',
    lineHeight: '$body',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',
  },
  '#__next': {
    minHeight: '100%',
    width: '100%',
  },
  '*': {
    boxSizing: 'border-box',
    position: 'relative',
  },
});

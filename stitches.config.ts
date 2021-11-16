import { createStitches } from '@stitches/react';

import { h1, h2, h3, h4, h5, h6, body } from 'constants/typography';

const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      header: "'Poppins', sans-serif",
      default: "'Lato', sans-serif",
      mono: "'IBM Plex Mono', monospace",
    },
    fontSizes: {
      'header-1': h1.fontSize as string,
      'header-2': h2.fontSize as string,
      'header-3': h3.fontSize as string,
      'header-4': h4.fontSize as string,
      'header-5': h5.fontSize as string,
      'header-6': h6.fontSize as string,
      body: body.fontSize as string,
    },
    lineHeights: {
      'header-1': h1.lineHeight as string,
      'header-2': h2.lineHeight as string,
      'header-3': h3.lineHeight as string,
      'header-4': h4.lineHeight as string,
      'header-5': h5.lineHeight as string,
      'header-6': h6.lineHeight as string,
      body: body.lineHeight as string,
    },
    fontWeights: {
      'extra-bold': 800,
      bold: 700,
      'semi-bold': 600,
      medium: 500,
      regular: 400,
    },
    colors: {},
  },
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 640px)',
    bp3: '(min-width: 768px)',
    bp4: '(min-width: 1024px)',
  },
});

export {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
};

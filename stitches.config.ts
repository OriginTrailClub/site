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
    colors: {
      "indigo-50": "#EEF2FF",
      "indigo-100": "#E0E7FF",
      "indigo-200": "#C7D2FE",
      "indigo-300": "#A5B4FC",
      "indigo-400": "#818CF8",
      "indigo-500": "#6366F1",
      "indigo-600": "#4F46E5",
      "indigo-700": "#4338CA",
      "indigo-800": "#3730A3",
      "indigo-900": "#312E81",

      "green-50": "#ECFDF5",
      "green-100": "#D1FAE5",
      "green-200": "#A7F3D0",
      "green-300": "#6EE7B7",
      "green-400": "#34D399",
      "green-500": "#10B981",
      "green-600": "#059669",
      "green-700": "#047857",
      "green-800": "#065F46",
      "green-900": "#064E3B",

      "gray-50": "#F9FAFB",
      "gray-100": "#F3F4F6",
      "gray-200": "#E5E7EB",
      "gray-300": "#D1D5DB",
      "gray-400": "#9CA3AF",
      "gray-500": "#6B7280",
      "gray-600": "#4B5563",
      "gray-700": "#374151",
      "gray-800": "#1F2937",
      "gray-900": "#111827",

      "text-header": "#171A23",
      "text-body": "#404553",
      "text-subtle": "#687682",
    },
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

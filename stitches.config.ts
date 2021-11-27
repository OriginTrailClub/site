import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

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
    letterSpacings: {},
    fontSizes: {
      'header-1': '2.875rem',
      'header-2': '2.0625rem',
      'header-3': '1.4375rem',
      'header-4': '1.1875rem',

      subtitle: '0.9375rem',

      'body-intro': '1.3125rem',
      'body-default': '1.0625rem',
      'body-compact': '0.9375rem',

      button: '1rem',

      caption: '0.75rem',
      cell: '0.75rem',
    },
    lineHeights: {
      header: 1.2,
      body: 1.5,
      none: 1,
    },
    fontWeights: {
      'extra-bold': 800,
      bold: 700,
      'semi-bold': 600,
      medium: 500,
      regular: 400,
    },
    colors: {
      'indigo-50': '#EEF2FF',
      'indigo-100': '#E0E7FF',
      'indigo-200': '#C7D2FE',
      'indigo-300': '#A5B4FC',
      'indigo-400': '#818CF8',
      'indigo-500': '#6366F1',
      'indigo-600': '#4F46E5',
      'indigo-700': '#4338CA',
      'indigo-800': '#3730A3',
      'indigo-900': '#312E81',

      'green-50': '#ECFDF5',
      'green-100': '#D1FAE5',
      'green-200': '#A7F3D0',
      'green-300': '#6EE7B7',
      'green-400': '#34D399',
      'green-500': '#10B981',
      'green-600': '#059669',
      'green-700': '#047857',
      'green-800': '#065F46',
      'green-900': '#064E3B',

      'cyan-50': '#F0FAFD',
      'cyan-100': '#CFF1F7',
      'cyan-200': '#ACE7F1',
      'cyan-300': '#A4E3EF',
      'cyan-400': '#5BCDE2',
      'cyan-500': '#2BBBD8',
      'cyan-600': '#00A6C7',
      'cyan-700': '#008BA8',
      'cyan-800': '#006C81',
      'cyan-900': '#003D48',

      'gray-50': '#F9FAFB',
      'gray-100': '#F3F4F6',
      'gray-200': '#E5E7EB',
      'gray-300': '#D1D5DB',
      'gray-400': '#9CA3AF',
      'gray-500': '#6B7280',
      'gray-600': '#4B5563',
      'gray-700': '#374151',
      'gray-800': '#1F2937',
      'gray-900': '#111827',

      'text-header': '#171A23',
      'text-body': '#404553',
      'text-subtle': '#687682',
      'text-emphasis': '$indigo-600',
    },
    space: {
      none: '0px',
      'xx-small': '2px',
      'x-small': '4px',
      small: '8px',
      regular: '16px',
      large: '32px',
      'x-large': '64px',
      'xx-large': '128px',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 640px)',
    bp3: '(min-width: 768px)',
    bp4: '(min-width: 1024px)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
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

import { css } from 'stitches.config';

import * as UseCaseBlockCaseStyles from './UseCaseBlockCase.styles';

export const container = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const contents = css({
  width: '100%',
});

export const cases = css({
  $$containerSize: '100vw',

  $$scrollPadding:
    'max(calc((100vw - $$containerSize) / 2), calc($space$regular / 2))',
  $$scrollPaddingLeft: '$$scrollPadding',
  $$scrollPaddingRight: '$$scrollPadding',

  $$useCaseSize: 'clamp(280px, 80%, 320px)',
  $$minUseCaseSize: '$$useCaseSize',
  $$maxUseCaseSize: '$$useCaseSize',

  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr',

  scrollBehavior: 'smooth',

  overflowX: 'auto',
  overflowY: 'hidden',

  // Hide scrollbar
  MsOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },

  scrollSnapType: 'x mandatory',

  [`.${UseCaseBlockCaseStyles.container}`]: {
    scrollSnapAlign: 'center',
  },

  '@bp3': {
    $$containerSize: 'min(100vw, calc(1234px + $space$regular))',
    $$minUseCaseSize:
      'calc(((100vw - $$scrollPadding * 2) - $space$large) / $$maxColumnCount)',
    $$maxUseCaseSize: 'calc((100vw - $$scrollPadding * 2) / $$maxColumnCount)',
  },

  '@media(min-width: 1234px)': {
    $$minUseCaseSize: '$$maxUseCaseSize',
  },
});

export const row = css({
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: '$$useCaseSize',
  gridTemplateRows: '1fr',

  '&:before': {
    content: '',
  },

  '&:after': {
    content: '',
  },

  gridTemplateColumns:
    '$$scrollPaddingLeft repeat($$columnCount, minmax($$minUseCaseSize, $$maxUseCaseSize)) $$scrollPaddingRight',
});

export const cell = css({
  m: 'calc($space$regular / 2)',

  variants: {
    type: {
      0: {
        [`& > .${UseCaseBlockCaseStyles.container()}`]: {
          $$circleColor: '$colors$cyan-200',
          $$circleOutlineColor: '$colors$cyan-300',
        },
      },
      1: {
        [`& > .${UseCaseBlockCaseStyles.container()}`]: {
          $$circleColor: '$colors$gray-200',
          $$circleOutlineColor: '$colors$gray-300',
        },
      },
      2: {
        [`& > .${UseCaseBlockCaseStyles.container()}`]: {
          $$circleColor: '$colors$indigo-200',
          $$circleOutlineColor: '$colors$indigo-300',
        },
      },
    },
  },
});

export const spacer = css({
  position: 'absolute',

  top: 0,
  left: 0,

  width: '$$scrollPaddingLeft',
});

export const navigationButton = css({
  border: 'none',
  p: '$regular',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',

  borderWidth: 1,
  borderStyle: 'solid',
  color: '$indigo-600',
  backgroundColor: 'white',
  borderColor: '$gray-200',

  '&:disabled': {
    opacity: 0,
  },

  '@media (hover: none) and (pointer: coarse)': {
    display: 'none',
  },

  '&:hover': {
    backgroundColor: '$indigo-50',
  },
  '&:active': {
    backgroundColor: '$indigo-100',
  },
});

export const navigationIcon = css({
  color: 'currentColor',
  display: 'flex',
  alignItems: 'center',
  width: '$fontSizes$button',
  height: '$fontSizes$button',
});

export const navigation = css({
  position: 'absolute',
  bottom: 'calc($regular + $small)',

  variants: {
    variant: {
      next: {
        right: '$regular',
      },
      previous: {
        left: '$regular',
      },
    },
  },
});

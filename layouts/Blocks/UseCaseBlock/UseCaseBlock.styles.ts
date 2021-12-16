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
  $$containerSize: '100%',

  $$scrollPadding:
    'max(calc((100% - $$containerSize) / 2), calc($space$regular / 2))',
  $$scrollPaddingLeft: '$$scrollPadding',
  $$scrollPaddingRight: '$$scrollPadding',

  $$useCaseSize: 'clamp(280px, 80%, 320px)',
  $$minUseCaseSize: '$$useCaseSize',
  $$maxUseCaseSize: '$$useCaseSize',

  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr',
  flexDirection: 'column',

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
    $$containerSize: 'min(100%, calc(1234px + $space$regular))',
  }
})

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

  '@bp3': {
    $$containerSize: 'min(100%, calc(1234px + $space$regular))',
    $$minUseCaseSize:
      'calc(((100% - $$scrollPadding * 2) - $space$large) / $$maxColumnCount)',
    $$maxUseCaseSize: 'calc((100% - $$scrollPadding * 2) / $$maxColumnCount)',
  },
  '@media(min-width: 1234px)': {
    $$minUseCaseSize: '$$maxUseCaseSize',
  },
})

console.log(String(UseCaseBlockCaseStyles.container()))

export const cell = css({
  m: 'calc($space$regular / 2)',

  variants: {
    type: {
      0: {
        [`& > .${UseCaseBlockCaseStyles.container()}`]: {
          $$circleColor: '$colors$cyan-200',
          $$circleOutlineColor: '$colors$cyan-300',        
        }
      },
      1: {
        [`& > .${UseCaseBlockCaseStyles.container()}`]: {
          $$circleColor: '$colors$gray-200',
          $$circleOutlineColor: '$colors$gray-300',        
        }
      },
      2: {
        [`& > .${UseCaseBlockCaseStyles.container()}`]: {
          $$circleColor: '$colors$indigo-200',
          $$circleOutlineColor: '$colors$indigo-300',        
        }
      }
    }
  }
})

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
  $$columnCount: 1,
  $$rowCount: 1,
  $$maxColumnCount: 1,

  $$useCaseSize: 'clamp(280px, 80%, 320px)',
  $$minUseCaseSize: '$$useCaseSize',
  $$maxUseCaseSize: '$$useCaseSize',
  $$containerSize: '$$useCaseSize',

  $$scrollPadding:
    'max(calc((100% - $$containerSize) / 2), calc($space$regular / 2))',
  $$scrollPaddingLeft: '$$scrollPadding',
  $$scrollPaddingRight: '$$scrollPadding',

  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: '$$useCaseSize',
  gridTemplateRows: 'repeat($$rowCount, 1fr)',

  gridTemplateColumns:
    '$$scrollPaddingLeft repeat($$columnCount, minmax($$minUseCaseSize, $$maxUseCaseSize)) $$scrollPaddingRight',

  marginTop: 'calc(-$regular / 2)',
  marginBottom: 'calc(-$regular / 2)',

  overflowX: 'auto',
  overflowY: 'hidden',

  // Hide scrollbar
  MsOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '&:before': {
    content: '',
  },
  '&:after': {
    content: '',
  },

  '@bp3': {
    $$containerSize: 'min(100%, calc(1234px + $space$regular))',
    $$minUseCaseSize: 'calc(((100% - $$scrollPadding * 2) - $space$large) / $$maxColumnCount)',
    $$maxUseCaseSize: 'calc((100% - $$scrollPadding * 2) / $$maxColumnCount)',

    '&:before': {
      gridColumnStart: 1,
      gridColumnEnd: 2,
      gridRowStart: 1,
      gridRowEnd: 'calc($$rowCount + 1)',
    },
    '&:after': {
      gridColumnStart: 'calc(1 + $$columnCount + 1)',
      gridColumnEnd: 'calc(1 + $$columnCount + 1)',
      gridRowStart: 1,
      gridRowEnd: 'calc($$rowCount + 1)',
    },

    gridTemplateRows: 'repeat($$rowCount, 1fr)',
  },

  '@media(min-width: calc(1234px + $space$regular * 2 + $space$large))': {
    $$minUseCaseSize: '$$maxUseCaseSize',
  },

  [`& > .${UseCaseBlockCaseStyles.container}`]: {
    margin: 'calc($space$regular / 2)',
  },
});

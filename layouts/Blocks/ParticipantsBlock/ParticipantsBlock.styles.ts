import { css } from 'stitches.config';

import * as ParticipantsBlockParticipantStyles from './ParticipantsBlockParticipant.styles';

export const container = css({
  $$columnCount: 1,
  $$maxColumnCount: 1,

  $$containerSize: '100vw',

  $$scrollPadding:
    'max(calc((100vw - $$containerSize) / 2), calc($space$small / 2))',
  $$scrollPaddingLeft: '$$scrollPadding',
  $$scrollPaddingRight: '$$scrollPadding',

  $$minParticipantSize:
    'calc(((100vw - $$scrollPadding * 2) - $space$large) / $$maxColumnCount)',
  $$maxParticipantSize: 'calc((100vw - $$scrollPadding * 2) / $$maxColumnCount)',

  $$participantSize: 'min($$minParticipantSize, $$maxParticipantSize)',

  '@bp2': {
    $$maxColumnCount: 2,
    $$containerSize: 'min(100vw, calc(1234px + $space$small * 3))',
  },

  '@bp3': {
    $$maxColumnCount: 3,
  },

  '@bp4': {
    $$maxColumnCount: 4,
  },

  '@media(min-width: 1234px)': {
    $$minParticipantSize: '$$maxParticipantSize',
  },

  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const contents = css({
  width: '100%',
});

export const participants = css({
  overflowX: 'auto',
  overflowY: 'hidden',

  scrollSnapType: 'x mandatory',

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

  [`& > .${ParticipantsBlockParticipantStyles.container}`]: {
    scrollSnapAlign: 'center',
  },

  '@bp2': {
    [`& > .${ParticipantsBlockParticipantStyles.container}`]: {
      scrollSnapAlign: 'center',
    },
  },
});

export const row = css({
  display: 'grid',
  gridAutoFlow: 'column',
  gridTemplateRows: '1fr',
  gridTemplateColumns:
    '$$scrollPadding repeat($$columnCount, $$participantSize) $$scrollPadding',

  '&:before': {
    content: '',
  },
  '&:after': {
    content: '',
  },
});

export const cell = css({
  scrollSnapAlign: 'center',
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
  top: 'calc(($$participantSize - (($space$small / 2) + $space$regular) * 2) / 2)',

  variants: {
    variant: {
      next: {
        right: '$regular',
      },
      previous: {
        left: '$regular',
      }
    }
  }
});

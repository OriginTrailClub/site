import { css } from 'stitches.config';

import * as ParticipantsBlockParticipantStyles from './ParticipantsBlockParticipant.styles';

export const container = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const contents = css({
  width: '100%',
});

export const participants = css({
  $$columnCount: 1,
  $$maxColumnCount: 1,

  $$containerSize: '100%',

  $$scrollPadding:
  'max(calc((100% - $$containerSize) / 2 + 1px), 1px)',

  $$minParticipantSize:
    'calc(((100% - $$scrollPadding * 2) - $space$large) / $$maxColumnCount)',
  $$maxParticipantSize: 'min(calc(1234px / 4), calc((100% - $$scrollPadding * 2) / $$maxColumnCount))',

  display: 'grid',
  gridAutoFlow: 'column',
  gridTemplateRows: '1fr',

  gridTemplateColumns:
    '$$scrollPadding repeat($$columnCount, min($$minParticipantSize, $$maxParticipantSize)) $$scrollPadding',

  marginTop: 'calc(-$regular / 2)',
  marginBottom: 'calc(-$regular / 2)',
  // Use a negative margin, due we need to add spacers of at least 
  marginLeft: -1,
  marginRight: -1,

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
    margin: 'calc($space$regular / 2)',
  },

  '@bp2': {
    $$maxColumnCount: 2,

    $$containerSize: 'min(100%, calc(1234px + $space$regular))',

    [`& > .${ParticipantsBlockParticipantStyles.container}`]: {
      scrollSnapAlign: 'center',
    },

    '&:before': {
      gridColumnStart: 1,
      gridColumnEnd: 2,
      gridRowStart: 1,
      gridRowEnd: 2,
    },
    '&:after': {
      gridColumnStart: 'calc(1 + $$columnCount + 1)',
      gridColumnEnd: 'calc(1 + $$columnCount + 1)',
      gridRowStart: 1,
      gridRowEnd: 2,
    },
  },

  '@bp3': {
    $$maxColumnCount: 3,
  },

  '@bp4': {
    $$maxColumnCount: 4,
  },

  '@media(min-width: calc(1234px + $space$regular * 2 + $space$large))': {
    $$minParticipantSize: '$$maxParticipantSize',
  },
});

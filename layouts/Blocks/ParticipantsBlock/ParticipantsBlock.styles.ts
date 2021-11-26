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

  $$scrollPadding: 'calc($space$small / 2)',

  $$minParticipantSize:
    'calc((100% - $space$large) / $$maxColumnCount)',
  $$maxParticipantSize: 'min(calc((1234px + $space$small * 2 + $space$small / 2 * 2) / 4), calc((100% - $space$small / 2 * 2) / $$maxColumnCount))',

  $$participantSize: 'min($$minParticipantSize, $$maxParticipantSize)',

  display: 'grid',
  gridAutoFlow: 'column',
  gridTemplateRows: '1fr',

  gridTemplateColumns:
    '$$scrollPadding repeat($$columnCount, $$participantSize) $$scrollPadding',

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
    $$maxColumnCount: 2,
    $$scrollPadding: 'max(calc((100% - ($$participantSize * $$columnCount)) / 2), calc($space$small / 2))',

    [`& > .${ParticipantsBlockParticipantStyles.container}`]: {
      scrollSnapAlign: 'center',
    },
  },

  '@bp3': {
    $$maxColumnCount: 3,
  },

  '@bp4': {
    $$maxColumnCount: 4,
  },

  '@media(min-width: calc(1234px + space$small / 2 * 2))': {
    $$minParticipantSize: '$$maxParticipantSize !important',
  },
});

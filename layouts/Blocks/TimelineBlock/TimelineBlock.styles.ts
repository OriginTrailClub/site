import { css } from 'stitches.config';

import * as TimeLineBlockEventStyles from './TimelineBlockEvent.styles';

export const container = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
});

export const contents = css({
  $$fadeSize: '$space$x-large',

  marginTop: '$large',
  display: 'flex',
  width: '100%',
  justifyContent: 'center',

  '&:after': {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    content: '',
    background:
      'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) calc(0% + $$fadeSize), rgba(255,255,255,0) calc(100% - $$fadeSize), rgba(255,255,255,1) 100%)',
    pointerEvents: 'none',
  },

  '@bp2': {
    $$fadeSize: '$space$xx-large',
  },

  '@bp4': {
    maxWidth: ' min(90vw, 1600px)',
  },
});

export const events = css({
  $$eventCount: 0,

  $$gap: '$space$large',

  // Size of a single event
  $$eventSize: 'max(140px, 30vw)',

  // Padding inside the scroll container
  $$scrollPadding: 'calc((100vw - $$eventSize) / 2)',
  $$scrollPaddingLeft: '$$scrollPadding',
  $$scrollPaddingRight: '$$scrollPadding',

  display: 'grid',
  gridTemplateColumns:
    '$$scrollPaddingLeft repeat($$eventCount, $$eventSize) $$scrollPaddingRight',
  gridTemplateRows: '1fr',
  gridAutoFlow: 'column',
  margin: 0,
  padding: 0,

  '&:before, &:after': {
    content: '',
  },

  overflowX: 'auto',
  overflowY: 'hidden',
  scrollSnapType: 'x mandatory',

  '@bp2': {
    $$scrollPadding: 'calc(($$fadeSize) + $space$regular - $space$small)',
    $$eventSize: 'max(180px, 15vw)',
  },

  '@bp3': {
    $$eventSize: 'min(220px, max(180px, 10vw))',
  },

  [`.${TimeLineBlockEventStyles.container}`]: {
    scrollSnapAlign: 'center',
    px: '$small',
  },

  // Hide scrollbar
  MsOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

export const line = css({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: 2,
  bottom: 'calc((($fontSizes$cell + ($space$x-small * 2)) / 2) + 1px)',
  background: `    
    repeating-linear-gradient(90deg,
        transparent,
        transparent 3px,
        $colors$gray-300 3px,
        $colors$gray-300 9px,
        transparent 12px,
        transparent 15px
    )
    `,
});

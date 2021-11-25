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
  marginTop: '$large',
  display: 'flex',
  width: '100%',
  justifyContent: 'center',

  '@bp4': {
    maxWidth: 'calc(1234px + $space$x-large)',
  },

  '@media(min-width: calc(1234px + 64px))': {
    $$fadeSize: '$space$x-large',

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
  }
});

export const events = css({
  $$eventCount: 0,

  $$gap: '$space$large',
  $$fadeSize: 0,

  // Size of a single event
  $$eventSize: 'min(140px, calc(100% / 2.6))',

  // Padding inside the scroll container
  $$scrollPadding: 'max(calc($$gap / 2), calc((100% - ($$gap / 2 + $$eventCount * $$eventSize)) / 2))',
  $$scrollPaddingLeft: '$$scrollPadding',
  $$scrollPaddingRight: '$$scrollPadding',

  display: 'grid',
  gridTemplateColumns:
    '$$scrollPaddingLeft repeat($$eventCount, $$eventSize) $$scrollPaddingRight',
  gridTemplateRows: '1fr',
  gridAutoFlow: 'column',
  margin: 0,
  padding: 0,
  width: '100%',

  overflowX: 'auto',
  overflowY: 'hidden',
  scrollSnapType: 'x mandatory',

  '&:before, &:after': {
    content: '',
  },

  '@bp2': {
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

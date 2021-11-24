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
});

export const events = css({
  $$eventCount: 0,

  $$gap: '$space$large',

  $$eventSize: 'max(10vw, min(150px, 200px))',
  
  $$scrollPadding: 'calc((100vw - $$eventSize) / 2)',
  $$scrollPaddingLeft: '$$scrollPadding',
  $$scrollPaddingRight: '$$scrollPadding',
  
  display: 'grid',
  gridTemplateColumns: '$$scrollPaddingLeft repeat($$eventCount, $$eventSize) $$scrollPaddingRight',
  gridTemplateRows: '1fr',
  gridAutoFlow: 'column',
  margin: 0,
  padding: 0,

  '&:before, &:after': {
      content: '',
  },

  overflowX: 'auto',
  overflowY: 'hidden',
  scrollSnapType: 'x proximity',

  // Hide scrollbar
  MsOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '@bp2': {
    $$scrollPadding: 'calc($space$regular - $space$small)',
  },

  [`.${TimeLineBlockEventStyles.container}`]: {
      scrollSnapAlign: 'center',
      px: '$small',

      '@bp2': {
          scrollSnapAlign: 'start'
      },
  }
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

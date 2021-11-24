import { css } from 'stitches.config';

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
  margin: 0,
  padding: 0,
  display: 'grid',
  flexDirection: 'row',
  listStyleType: 'none',
  gridTemplateRows: '1fr',
  gridAutoColumns: 'minmax(0, 1fr)',
  gridAutoFlow: 'column',
  gridGap: '$large',
  px: '$regular',
  flexShrink: 0,
});

export const scrollArea = css({
  overflowX: 'auto',
  overflowY: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  WebkitOverflowScrolling: 'touch',
});

export const scrollContent = css({
  width: 'auto',
  display: 'flex',
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

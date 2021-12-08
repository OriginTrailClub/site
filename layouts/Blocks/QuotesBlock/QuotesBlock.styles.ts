import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
});

export const slide = css({ maxWidth: 1234, width: '100%' });

export const navigation = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  mt: 'calc((-48px - 2px) / 2)',
});

export const contents = css({ maxWidth: 1234, width: '100%', display: 'flex', zIndex: 1 });

export const indicators = css({
  display: 'flex',
  flexDirection: 'row',
  my: '$none',
  ml: 'auto',
  mr: '$none',
  py: '$none',
  px: '$regular',
  listStyleType: 'none',
});

export const indicator = css({
  backgroundColor: '$indigo-50',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 48,
  height: 48,

  '&:before': {
    content: '',
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: '$indigo-700',
    borderStyle: 'solid',
  },

  '&:hover': {
    'cursor': 'pointer',
    '&:before': {
      backgroundColor: '$indigo-600',
    }
  },

  '&[aria-selected="true"]': {
    '&:before': {
      backgroundColor: '$indigo-700',
    }
  }
});

export const line = css({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: 2,
  bottom: 'calc((48px - 2px) / 2)',
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

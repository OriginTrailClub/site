import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  px: '$regular',
});

export const contents = css({
  maxWidth: 1234,
  width: '100%',
  display: 'grid',
  gridTemplateAreas: `
   "breadcrumbs"
   "title      "
   "sidebar    "
   "content    "
   "navigation "
  `,

  '@bp3': {
    gridTemplateAreas: `
    "breadcrumbs breadcrumbs"
    "title       title      "
    "content     sidebar    "
    "navigation  .          "
   `,
    gridTemplateColumns:
      'min(calc(100% / 5 * 3), 80ch) 1fr',
    gridColumnGap: '$large',    
  },

  '@bp4': {
    gridTemplateColumns:
      'min(calc(100% / 3 * 2), 80ch) 1fr',
    gridColumnGap: '$x-large',
  },
});

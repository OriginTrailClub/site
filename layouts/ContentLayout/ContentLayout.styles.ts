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
   "content    "
   "sidebar    "
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
      'minmax(calc(100% / 3 * 2), 80ch) min(calc(100% / 3 * 1), 340px)',
    gridColumnGap: '$large',
  },
});

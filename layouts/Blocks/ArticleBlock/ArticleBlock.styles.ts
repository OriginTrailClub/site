import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  px: '$regular',
});

export const contents = css({
  maxWidth: 1234,
  display: 'grid',

  gridTemplateAreas: `
        "subtitle"
        "title"
        "image"
        "description"
        "action"
    `,
  gridTemplateColumns: '1fr',
  columnGap: '$large',

  '@bp4': {
    gridTemplateAreas: `
          "subtitle       image"
          "title          image"
          "description    image"
          "action         image"`,
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: 'max-content max-content max-content 1fr',
  },
});

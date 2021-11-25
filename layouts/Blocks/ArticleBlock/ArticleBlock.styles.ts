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

  '@bp2': {
    gridTemplateAreas: `
        "subtitle"
        "title"
        "image"
        "description"
        "action"`,
    gridTemplateColumns: '1fr',
  },

  '@bp3': {
    gridTemplateAreas: `
        "subtitle       image"
        "title          image"
        "description    image"
        "action         image"`,
    gridTemplateColumns:
      'calc(100% / 5 * 3 - $space$large / 2) calc(100% / 5 * 2 - $space$large / 2)',
    gridTemplateRows: 'auto auto 1fr auto',
  },

  '@bp4': {
    gridTemplateAreas: `
        "subtitle       image"
        "title          image"
        "description    image"
        "action         image"`,
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto auto 1fr auto',
  },
});

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
  width: '100%',

  gridTemplateAreas: `
        "subtitle"
        "title"
        "image"
        "description"
        "action"
    `,
  gridTemplateColumns: '1fr',
  columnGap: '$regular',

  '@bp2': {
    gridTemplateAreas: `
        "subtitle       subtitle"
        "title          title"
        "description    image"
        "action         image"`,
    gridTemplateColumns:
      'calc(100% / 13 * 7 - $space$regular / 2) calc(100% / 13 * 6 - $space$regular / 2)',
    gridTemplateRows: 'auto auto 1fr auto',
  },

  '@bp3': {
    gridTemplateAreas: `
        "subtitle       image"
        "title          image"
        "description    image"
        "action         image"`,
    gridTemplateColumns:
      'calc(100% / 13 * 7 - $space$regular / 2) calc(100% / 13 * 6 - $space$regular / 2)',
    gridTemplateRows: 'auto auto 1fr auto',
  },

  '@bp4': {
    gridTemplateAreas: `
        "subtitle       image"
        "title          image"
        "description    image"
        "action         image"`,
    gridTemplateColumns:
      'calc(100% / 13 * 8 - $space$regular / 2) calc(100% / 13 * 5 - $space$regular / 2)',
    gridTemplateRows: 'auto auto 1fr auto',
  },
});

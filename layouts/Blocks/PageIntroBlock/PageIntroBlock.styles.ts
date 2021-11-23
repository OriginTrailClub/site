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
        "content"
        "image"
    `,
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto auto',
  gridRowGap: '$x-large',

  '@bp4': {
    gridTemplateAreas: `"content image"`,
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr',
    gridColumnGap: '$large',
  },
});

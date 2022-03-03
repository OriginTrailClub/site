import { css } from 'stitches.config';

export const container = css({
  gridArea: 'sections',

  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  p: '$none',
  mt: '$regular',

  listStyle: 'none',

  '@bp4': {
    mt: '$large',
  },
});

import { css } from 'stitches.config';

export const container = css({
  width: '100%',
  gridArea: 'title',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  mb: '$regular',

  '@bp4': {
    mb: '$large',
  },
});

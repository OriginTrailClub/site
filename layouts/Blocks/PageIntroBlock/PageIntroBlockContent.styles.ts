import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  gridArea: 'content',
  flexDirection: 'column',
  textAlign: 'center',
  px: '$large',

  '@bp4': {
    textAlign: 'left',
    alignItems: 'flex-start',
    px: '$none',
  },
});

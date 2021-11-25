import { css } from 'stitches.config';

export const inner = css({
  display: 'flex',
  maxWidth: 1234,
  width: '100%',
})

export const contents = css({
  width: '100%',
  maxWidth: 'min(100vw - $space$large, 80ch, 720px)',
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'flex-start',
  textAlign: 'left',
  px: '$none',

  '@bp2': {
    alignItems: 'center',
    textAlign: 'center',
    px: '$large',      
  }
});

export const container = css({
  display: 'flex',
  width: '100%',
  px: '$regular',
  justifyContent: 'center',

  [`& > .${inner}`]: {
    justifyContent: 'center',
  },

  variants: {
    align: {
      center: {
        justifyContent: 'center',

        [`& > .${inner}`]: {
          justifyContent: 'center',
        },      
      },
      left: {
        [`& > .${inner}`]: {
          justifyContent: 'flex-start',
        },
        [`& > .${inner} > .${contents}`]: {
          alignItems: 'flex-start',
          textAlign: 'left',
          px: '$none',
        }
      },
    }
  }
});

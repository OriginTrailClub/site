import { css } from 'stitches.config';

export const container = css({
  p: '$small',
  borderColor: '$gray-300',
  borderWidth: 1,
  borderStyle: 'solid',
  width: '100%',
  m: '$small',
  display: 'flex',
  position: 'relative',

  '&:before': {
    content: '',
    width: '100%',
    pb: '66%',
    height: 0,
  },
});

export const contents = css({
  position: 'absolute',
  p: '$small',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,

  '@bp3': {
    p: '$regular',
  },
});

export const image = css({
  position: 'relative',
  width: '100%',
  height: '100%',
});

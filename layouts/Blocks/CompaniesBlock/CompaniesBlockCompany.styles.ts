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
  top: '$small',
  left: '$small',
  right: '$small',
  bottom: '$small',

  '@bp3': {
    top: '$regular',
    left: '$regular',
    right: '$regular',
    bottom: '$regular',
  },
});

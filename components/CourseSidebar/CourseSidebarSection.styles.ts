import { css } from 'stitches.config';

export const container = css({
  width: '100%',
  borderLeft: 0,
  borderRight: 0,
  borderTop: 1,
  borderBottom: 0,
  borderColor: '$gray-300',
  borderStyle: 'solid',
});

export const lessons = css({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  p: '$none',
  m: '$none',

  listStyle: 'none',
});

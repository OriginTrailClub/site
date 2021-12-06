import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
});

export const contents = css({
  maxWidth: 'calc(1234px + ($space$regular * 2))',
  width: '100%',

  display: 'grid',

  gridTemplateColumns: '1fr',

  '@bp3': {
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: '$regular',
  },
});

export const accordion = css({
  width: '100%',
});

export const image = css({
  width: '100%',
  display: 'none',

  '@bp3': {
    display: 'block',
    pr: '$regular',
  },
});

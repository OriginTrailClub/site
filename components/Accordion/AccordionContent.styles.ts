import { css } from 'stitches.config';

export const container = css({
  p: '$regular',

  variants: {
    isExpanded: {
      true: {
        display: 'flex',
      },
      false: {
        display: 'none',
      },
    },
  },
});

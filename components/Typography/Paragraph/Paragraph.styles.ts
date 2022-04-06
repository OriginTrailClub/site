import { css } from 'stitches.config';

export const container = css({
  m: 0,
  color: '$text-body',
  lineHeight: '$body',

  variants: {
    variant: {
      intro: {
        fontSize: '$body-intro',
      },
      default: {
        fontSize: '$body-default',
      },
      compact: {
        fontSize: '$body-compact',
      },
    },
  },
});

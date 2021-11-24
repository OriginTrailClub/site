import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = css({
  my: '$regular',
});

export const badge = css({
  fontFamily: '$mono',
  fontSize: '$cell',
  px: '$small',
  py: '$x-small',

  variants: {
    style: {
      launched: {
        color: '$green-700',
        backgroundColor: '$green-100',
      },
      announced: {
        color: '$gray-700',
        backgroundColor: '$gray-100',
      },
    },
  },
});

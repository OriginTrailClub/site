import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = css({
  mx: '$none',
  my: '$regular',
  fontFamily: '$header',
  lineHeight: '$header',
  color: '$text-header',

  fontWeight: '$semi-bold',
  fontSize: '$header-4',
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

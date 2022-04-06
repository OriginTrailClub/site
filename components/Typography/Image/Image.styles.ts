import { css } from 'stitches.config';

export const container = css({
  width: '100%',
  m: 0,
});

export const label = css({
  fontFamily: '$mono',
  fontSize: '$caption',
  lineHeight: '$none',
  color: '$text-subtle',

  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  mt: '$regular',
});

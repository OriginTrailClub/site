import { css } from 'stitches.config';

export const container = css({
  width: '100%',
  borderWidth: 0,
  borderTopWidth: 1,
  borderStyle: 'solid',
  borderColor: '$gray-200',
  p: '$regular',

  display: 'flex',
  justifyContent: 'center',
});

export const contents = css({
  display: 'flex',

  maxWidth: 1234,
  width: '100%',
});

export const label = css({
  fontSize: '$cell',
  lineHeight: '$body',
  fontFamily: '$mono',
  color: '$text-subtle',
  display: 'inline-flex',
  alignItems: 'center',
  ml: 'auto',
});

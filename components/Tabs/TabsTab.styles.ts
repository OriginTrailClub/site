import { css } from 'stitches.config';

export const container = css({
  px: '$x-small',
  py: '$small',
  borderWidth: 1,
  borderBottomWidth: 2,
  borderStyle: 'solid',
  borderColor: 'transparent',
  color: '$text-subtle',

  mb: -2,

  '&[aria-selected="true"]': {
    backgroundColor: '$indigo-50',
    borderColor: '$indigo-100',
    color: '$indigo-600',
    borderBottomColor: '$indigo-600',
  },
});

export const label = css({
  color: 'currentColor',
  fontSize: '$button',
  lineHeight: '$button',
  fontWeight: '$bold',
  fontFamily: '$mono',
  p: '$x-small',
});

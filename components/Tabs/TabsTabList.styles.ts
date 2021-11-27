import { css } from 'stitches.config';

import * as TabsTabStyles from './TabsTab.styles';

export const tabs = css({
  display: 'flex',
  width: '100%',
  borderBottom: '1px solid $gray-200',

  [`& > .${TabsTabStyles.container}`]: {
    mr: '$regular',

    '&:last-of-type': {
      mr: '$none',
    },
  },
});

export const tab = css({
  px: '$x-small',
  py: '$small',
  borderWidth: 1,
  borderBottomWidth: 2,
  borderStyle: 'solid',
  borderColor: 'transparent',
  color: '$text-subtle',

  marginBottom: -2,

  '&[aria-selected="true"]': {
    backgroundColor: '$indigo-50',
    borderColor: '$indigo-100',
    color: '$indigo-600',
    borderBottomColor: '$indigo-600',
  },
});

export const tabLabel = css({
  color: 'currentColor',
  fontSize: '$button',
  lineHeight: '$button',
  fontWeight: '$semi-bold',
  p: '$x-small',
  fontFamily: '$mono',
});

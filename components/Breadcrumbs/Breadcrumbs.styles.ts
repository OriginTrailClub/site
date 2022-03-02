import * as BreadcrumbsBreadcrumbStyles from './BreadcrumbsBreadcrumb.styles';

import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  listStyleType: 'none',

  p: '$none',
  m: '$none',

  [`.${BreadcrumbsBreadcrumbStyles.container()}`]: {
    pr: '$small',

    '&:last-of-type': {
      pr: '$none',

      [`.${BreadcrumbsBreadcrumbStyles.icon()}`]: {
        display: 'none',
      }
    },
  },
});

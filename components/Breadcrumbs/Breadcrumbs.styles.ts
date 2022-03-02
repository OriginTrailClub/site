import * as BreadcrumbsBreadcrumbStyles from './BreadcrumbsBreadcrumb.styles';

import { css } from 'stitches.config';

export const container = css({
  display: 'flex',

  m: '-$small',
  p: 'calc($small / 2)',

  [`.${BreadcrumbsBreadcrumbStyles.container()}`]: {
    m: 'calc($small / 2)',
  },
});

export const list = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  listStyleType: 'none',

  p: '$none',
  m: '$none',
});

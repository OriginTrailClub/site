import * as BreadcrumbsBreadcrumbStyles from './BreadcrumbsBreadcrumb.styles';

import { css } from 'stitches.config';

export const container = css({
  display: 'flex',

  mx: '-$small',
  my: '-$regular',
  px: 'calc($small / 2)',
  py: 'calc($regular / 2)',

  [`.${BreadcrumbsBreadcrumbStyles.container()}`]: {
    mx: 'calc($small / 2)',
    my: 'calc($regular / 2)',
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

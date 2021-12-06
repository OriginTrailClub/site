import { css } from 'stitches.config';

import * as SocialsBlockSocialStyles from './SocialsBlockSocial.styles';

export const container = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  px: '$regular',
});

export const contents = css({
  display: 'flex',
  justifyContent: 'flex-start',
  maxWidth: 1234,
  width: '100%',

  '@bp2': {
    justifyContent: 'center',
  },
});
export const socials = css({
  $$gutter: '$space$regular',
  $$minColumnWidth: 'calc(100% / $$columnCount)',
  $$maxColumnWidth: '180px',

  m: 'calc(-$$gutter / 2)',
  p: 0,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  width: 'calc(100% + $$gutter)',
  maxWidth: 'calc($$maxColumnWidth * $$columnCount + $$gutter)',

  [`.${SocialsBlockSocialStyles.container()}`]: {
    width: 'calc(min($$minColumnWidth, $$maxColumnWidth) - $$gutter)',
    m: 'calc($$gutter / 2)',
  },

  '@bp2': {
    justifyContent: 'center',
  },
});

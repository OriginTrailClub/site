import { css } from 'stitches.config';

import * as PageIntroBlockActionStyles from './PageIntroBlockAction.styles';

export const container = css({
  display: 'flex',
  width: 'auto',
  m: 'calc(-$small / 2)',
  mt: 'calc($large + $small)',
  flexWrap: 'wrap',
  maxWidth: 'calc(100% - $small)',

  [`& > .${PageIntroBlockActionStyles.container}`]: {
    m: 'calc($small / 2)',
  },
});

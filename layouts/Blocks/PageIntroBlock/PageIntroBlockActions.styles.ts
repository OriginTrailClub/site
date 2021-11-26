import { css } from 'stitches.config';

import * as PageIntroBlockActionStyles from './PageIntroBlockAction.styles';

export const container = css({
  display: 'flex',
  width: 'auto',
  margin: 'calc(-$small / 2)',
  marginTop: 'calc($large + $small)',
  flexWrap: 'wrap',
  maxWidth: 'calc(100% - $small)',

  [`& > .${PageIntroBlockActionStyles.container}`]: {
    margin: 'calc($small / 2)',
  },
});

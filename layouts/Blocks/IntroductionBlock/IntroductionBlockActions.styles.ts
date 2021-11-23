import { css } from 'stitches.config';

import * as IntroductionBlockActionStyles from './IntroductionBlockAction.styles';

export const container = css({
  display: 'flex',
  width: 'auto',
  margin: 'calc(-$small / 2)',
  marginTop: 'calc($large + $small)',
  flexWrap: 'wrap',
  justifyContent: 'center',
  maxWidth: 'calc(100% - $small)',

  [`& > .${IntroductionBlockActionStyles.container}`]: {
    margin: 'calc($small / 2)',
  },
});

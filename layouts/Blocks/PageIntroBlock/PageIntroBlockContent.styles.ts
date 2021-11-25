import { css } from 'stitches.config';

import * as PageIntroBlockActionsStyles from './PageIntroBlockActions.styles';

export const container = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  gridArea: 'content',
  flexDirection: 'column',

  [`& > .${PageIntroBlockActionsStyles.container}`]: {
    justifyContent: 'flex-start',
  },

  '@bp2': {
    alignItems: 'center',
    textAlign: 'center',
    px: '$large',

    [`& > .${PageIntroBlockActionsStyles.container}`]: {
      justifyContent: 'center',
    },
  },

  '@bp4': {
    textAlign: 'left',
    alignItems: 'flex-start',
    px: '$none',
  },
});

import { css } from 'stitches.config';

import * as UseCaseBlockImageStyles from './UseCaseBlockImage.styles';

export const container = css({
  display: 'grid',
  border: '1px solid $gray-200',

  height: '100%',

  gridTemplateColumns:
    '$space$regular 1fr calc(100px + $space$regular * 2) $space$regular',
  gridTemplateRows: '$space$regular max-content 1fr max-content $space$regular',
  gridTemplateAreas: `
    ".  .           .            .    "
    ".  title       title        .    "
    ".  description description  .    "
    ".  .           image        image"
    ".  .           image        image"
  `,
  overflow: 'hidden',

  [`& .${UseCaseBlockImageStyles.container}`]: {
    '&:before': {
      backgroundColor: '$$circleColor',
    },
    '&:after': {
      borderColor: '$$circleOutlineColor',
    },
  },

  '@bp3': {
    gridTemplateColumns: '$space$regular 1fr minmax(25%, 100px) $space$regular',
    gridTemplateRows:
      '$space$regular max-content max-content 1fr $space$regular',

    gridTemplateAreas: `
      ".  .            .      .   "
      ".  title        title  .   "
      ".  description  image image"
      ".  .            image image"
      ".  .            image image"
    `,
  },
});

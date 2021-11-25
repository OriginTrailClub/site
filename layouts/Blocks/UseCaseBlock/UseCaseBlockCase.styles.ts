import { css } from 'stitches.config';

import * as UseCaseBlockImageStyles from './UseCaseBlockImage.styles';

export const container = css({
  $$circleColor: '$colors$cyan-200',
  $$circleOutlineColor: '$colors$cyan-300',

  display: 'grid',
  border: '1px solid $gray-300',

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

  '&:nth-of-type(4n + 1)': {
    $$circleColor: '$colors$cyan-200',
    $$circleOutlineColor: '$colors$cyan-300',
  },

  '&:nth-of-type(4n + 2)': {
    $$circleColor: '$colors$gray-200',
    $$circleOutlineColor: '$colors$gray-300',
  },

  '&:nth-of-type(4n + 3)': {
    $$circleColor: '$colors$indigo-200',
    $$circleOutlineColor: '$colors$indigo-300',
  },

  '&:nth-of-type(4n + 4)': {
    $$circleColor: '$colors$green-200',
    $$circleOutlineColor: '$colors$green-300',
  },

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

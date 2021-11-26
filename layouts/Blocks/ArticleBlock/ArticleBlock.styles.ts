import { css } from 'stitches.config';

import * as ArticleBlockImageStyles from './ArticleBlockImage.styles';
import * as ArticleBlockContentStyles from './ArticleBlockContent.styles';
import * as ArticleBlockActionStyles from './ArticleBlockAction.styles';

export const container = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  px: '$regular',
});

export const contents = css({
  maxWidth: 1234,
  display: 'grid',
  width: '100%',

  gridTemplateAreas: `
    "image"
    "content"
  `,

  [`& > .${ArticleBlockImageStyles.container}`]: {
    mb: '$regular',

    '@bp3': {
      mb: '$none',
      ml: '$regular'
    }
  },

  [`& > .${ArticleBlockContentStyles.container}`]: {
    mt: '$regular',

    '@bp3': {
      mb: '$none',
      mr: '$regular',
    },
  },

  [`.${ArticleBlockActionStyles.container}`]: {
    '@bp2': {
      justifyContent: 'center',
    },

    '@bp3': {
      justifyContent: 'flex-start',
    }
  },

  '@bp2': {
    maxWidth: 480,
    textAlign: 'center',
  },

  '@bp3': {
    maxWidth: 1234,
    textAlign: 'left',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateAreas: `
      "content image"
    `
  }
});

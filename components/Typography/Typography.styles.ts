import { css } from 'stitches.config';

import * as HeadingStyles from './Heading/Heading.styles';
import * as ParagraphStyles from './Paragraph/Paragraph.styles';
import * as ListStyles from './List/List.styles';

export const container = css({
  maxWidth: '80ch',

  [`& > .${HeadingStyles.container()}`]: {
    '&[data-level="1"]': {
      mb: '$regular',

      '&:last-child': {
        mb: '$none',
      },
    },
    '&[data-level="2"]': {
      mb: '$regular',

      '&:last-child': {
        mb: '$none',
      },
    },
    '&[data-level="3"]': {
      mb: '$small',

      '&:last-child': {
        mb: '$none',
      },
    },
    '&[data-level="4"]': {
      mb: 0,
    },
    '&[data-level="5"]': {
      mb: 0,
    },
  },
  [`& > .${ParagraphStyles.container()}`]: {
    mb: '$large',

    '&:last-child': {
      mb: '$none',
    },
  },
  [`& .${ListStyles.container()}:not(.${ListStyles.container()} .${ListStyles.container()})`]: {
    mb: '$large',

    '&:last-child': {
      mb: '$none',
    },
  },
});

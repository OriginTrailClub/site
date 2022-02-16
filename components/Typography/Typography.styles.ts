import { css } from 'stitches.config';

import * as HeadingStyles from './Heading/Heading.styles';
import * as ParagraphStyles from './Paragraph/Paragraph.styles';

export const container = css({
  maxWidth: '80ch',

  [`& .${HeadingStyles.container()}`]: {
    '&[data-level="1"]': {
      mb: '$regular',
    },
    '&[data-level="2"]': {
      mb: '$regular',
    },
    '&[data-level="3"]': {
      mb: '$small',
    },
    '&[data-level="4"]': {
      mb: 0,
    },
    '&[data-level="5"]': {
      mb: 0,
    },
  },
  [`& .${ParagraphStyles.container()}`]: {
    mb: '$large',
  },
});

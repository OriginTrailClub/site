import { css } from 'stitches.config';

import * as HeadingStyles from './Heading/Heading.styles';
import * as ParagraphStyles from './Paragraph/Paragraph.styles';

export const container = css({
    maxWidth: '80ch',

    [`& .${HeadingStyles.container()}`]: {
      '&[data-level="1"]': {
        mb: 0,
      },
      '&[data-level="2"]': {
        mb: 0,
      },
      '&[data-level="3"]': {
        mb: 0,
      },
      '&[data-level="4"]': {
        mb: 0,
      },
      '&[data-level="5"]': {
        mb: 0,
      },
    },
    [`& .${ParagraphStyles.container()}`]: {
      mb: '1rem',
    },  
});

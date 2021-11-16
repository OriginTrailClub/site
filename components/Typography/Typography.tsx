import { Paragraph, ParagraphProps } from './Paragraph';
import { Heading, HeadingProps } from './Heading';

import { styled } from 'stitches.config';

import { h1, h2, h3, h4, h5, content } from 'constants/typography';

type TypographyElement = React.ReactElement<ParagraphProps | HeadingProps>;

export interface TypographyProps {
  children: TypographyElement | TypographyElement[];
}

const TypographyContainer = styled('div', {
  maxWidth: '80ch',

  [`& ${Heading}`]: {
    '&[data-level="1"]': {
      marginBottom: h1.marginBottom,
    },
    '&[data-level="2"]': {
      marginBottom: h2.marginBottom,
    },
    '&[data-level="3"]': {
      marginBottom: h3.marginBottom,
    },
    '&[data-level="4"]': {
      marginBottom: h4.marginBottom,
    },
    '&[data-level="5"]': {
      marginBottom: h5.marginBottom,
    },
  },
  [`& ${Paragraph}`]: {
    marginBottom: content.marginBottom,
  },
});

export function Typography({ children }: TypographyProps) {
  return <TypographyContainer>{children}</TypographyContainer>;
}

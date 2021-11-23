import { Paragraph, ParagraphProps } from './Paragraph';
import { Heading, HeadingProps } from './Heading';

import { styled } from 'stitches.config';

type TypographyElement = React.ReactElement<
  ParagraphProps | HeadingProps
> | null;

export interface TypographyProps {
  children: TypographyElement | TypographyElement[];
}

const TypographyContainer = styled('div', {
  maxWidth: '80ch',

  [`& ${Heading}`]: {
    '&[data-level="1"]': {
      marginBottom: 0,
    },
    '&[data-level="2"]': {
      marginBottom: 0,
    },
    '&[data-level="3"]': {
      marginBottom: 0,
    },
    '&[data-level="4"]': {
      marginBottom: 0,
    },
    '&[data-level="5"]': {
      marginBottom: 0,
    },
  },
  [`& ${Paragraph}`]: {
    marginBottom: 0,
  },
});

export function Typography({ children }: TypographyProps) {
  return <TypographyContainer>{children}</TypographyContainer>;
}

import * as React from 'react';

import { filterDOMProps } from '@react-aria/utils';

import { DOMProps } from 'types';
import { styled } from 'stitches.config';

export interface ParagraphProps extends DOMProps {
  /**
   * Paragraph content
   */
  children: React.ReactNode;

  /**
   * Set text style, intro, default or compact
   * @default default
   */
  variant?: 'intro' | 'default' | 'compact';
}

const ParagraphElement = styled('p', {
  margin: 0,
  color: '$text-body',
  lineHeight: '$body',

  variants: {
    variant: {
      intro: {
        fontSize: '$body-intro',
      },
      default: {
        fontSize: '$body-default',
      },
      compact: {
        fontSize: '$body-compact',
      },
    },
  },
});

/**
 * Paragraph is used to create paragraphs in the typographic hierarchy
 */
export const Paragraph = React.forwardRef(function Paragraph(
  props: ParagraphProps,
  ref: React.Ref<HTMLParagraphElement>
) {
  const { children, variant, ...otherProps } = props;

  return (
    <ParagraphElement
      {...filterDOMProps(otherProps)}
      variant={variant}
      data-variant={variant}
      ref={ref}
    >
      {children}
    </ParagraphElement>
  );
});

Paragraph.toString = ParagraphElement.toString;

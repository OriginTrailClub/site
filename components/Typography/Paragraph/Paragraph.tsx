import * as React from 'react';

import { filterDOMProps } from '@react-aria/utils';

import { DOMProps } from 'types';
import { styled } from 'stitches.config';

export interface ParagraphProps extends DOMProps {
  /**
   * Paragraph content
   */
  children: React.ReactNode;
}

const ParagraphElement = styled('p', {
  fontSize: '$body',
  lineHeight: '$body',
  margin: 0,
});

/**
 * Paragraph is used to create paragraphs in the typographic hierarchy
 */
export const Paragraph = React.forwardRef(function Paragraph(
  props: ParagraphProps,
  ref: React.Ref<HTMLParagraphElement>
) {
  const { children, ...otherProps } = props;

  return (
    <ParagraphElement {...filterDOMProps(otherProps)} ref={ref}>
      {children}
    </ParagraphElement>
  );
});

Paragraph.toString = ParagraphElement.toString;

import * as React from 'react';

import * as Styles from './Paragraph.styles';

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

/**
 * Paragraph is used to create paragraphs in the typographic hierarchy
 */
export const Paragraph = React.forwardRef(function Paragraph(
  props: ParagraphProps,
  ref: React.Ref<HTMLParagraphElement>
) {
  const { children, variant, ...otherProps } = props;

  return (
    <p
      {...filterDOMProps(otherProps)}
      data-variant={variant}
      ref={ref}
      className={Styles.container({
        variant,
      })}
    >
      {children}
    </p>
  );
});

import * as React from 'react';

import { styled } from 'stitches.config';

const VisuallyHiddenElement = styled('span', {
  position: 'absolute',
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  m: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  wordWrap: 'normal',
});

export interface VisuallyHiddenProps {
  /**
   * Hidden content, which can be detected by a screen reader
   */
  children: React.ReactNode;
}

/**
 * VisuallyHidden is used to hide content visually, but can still be detected by a screen reader
 */
export const VisuallyHidden = React.forwardRef<
  React.ElementRef<'span'>,
  VisuallyHiddenProps
>(function VisuallyHidden(props, ref) {
  const { children } = props;

  return <VisuallyHiddenElement ref={ref}>{children}</VisuallyHiddenElement>;
});

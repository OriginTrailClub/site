import * as React from 'react';

import { filterDOMProps } from '@react-aria/utils';

import { DOMProps } from 'types';
import { styled } from 'stitches.config';

export interface SubtitleProps extends DOMProps {
  /**
   * Subtitle content
   */
  children: string;
}

export const SubtitleElement = styled('h5', {
  fontFamily: '$header',
  lineHeight: '$header',
  fontSize: '$subtitle',
  fontWeight: '$medium',
  color: '$text-emphasis',
  margin: 0,
});

/**
 * Subtitle is used to create a subtitle
 */
export const Subtitle = React.forwardRef(function Subtitle(
  props: SubtitleProps,
  ref: React.Ref<HTMLHeadingElement>
) {
  const { children, ...otherProps } = props;

  return (
    <SubtitleElement {...filterDOMProps(otherProps)} ref={ref}>
      {children}
    </SubtitleElement>
  );
});

Subtitle.toString = SubtitleElement.toString;

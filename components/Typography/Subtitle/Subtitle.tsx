import * as React from 'react';

import * as Styles from './Subtitle.styles';

import { filterDOMProps } from '@react-aria/utils';

import { DOMProps } from 'types';

export interface SubtitleProps extends DOMProps {
  /**
   * Subtitle content
   */
  children: string;
}

/**
 * Subtitle is used to create a subtitle
 */
export const Subtitle = React.forwardRef(function Subtitle(
  props: SubtitleProps,
  ref: React.Ref<HTMLHeadingElement>
) {
  const { children, ...otherProps } = props;

  return (
    <strong
      {...filterDOMProps(otherProps)}
      className={Styles.container()}
      ref={ref}
    >
      {children}
    </strong>
  );
});

import * as React from 'react';

import * as Styles from './Heading.styles';

import { filterDOMProps } from '@react-aria/utils';

import { DOMProps } from 'types';

export interface HeadingProps extends DOMProps {
  /**
   * Heading content
   */
  children: string;
  /**
   * Sets heading level, h1 through h4
   * @default 3
   */
  level?: 1 | 2 | 3 | 4;
  /**
   * Sets the visual style of the heading
   * defaults to the level property
   * @default 3
   */
  style?: 1 | 2 | 3 | 4;
}

/**
 * Heading is used to create the different heading levels of the typographic hierarchy
 */
export const Heading = React.forwardRef(function Heading(
  props: HeadingProps,
  ref: React.Ref<HTMLHeadingElement>
) {
  const { children, level = 3, style = level, ...otherProps } = props;

  let HeadingTag = `h${level}` as React.ElementType;

  return (
    <HeadingTag
      {...filterDOMProps(otherProps)}
      level={style}
      ref={ref}
      data-level={style}
      className={Styles.container({
        level: style,
      })}
    >
      {children}
    </HeadingTag>
  );
});

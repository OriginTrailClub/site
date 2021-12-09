import * as React from 'react';

import { filterDOMProps } from '@react-aria/utils';

import { DOMProps } from 'types';
import { styled } from 'stitches.config';

export interface HeadingProps extends DOMProps {
  /**
   * Heading content
   */
  children: string;
  /**
   * Sets heading level, h1 through h5
   * @default 3
   */
  level?: 1 | 2 | 3 | 4;
}

export const HeadingElement = styled('h1', {
  fontFamily: '$header',
  lineHeight: '$header',
  color: '$text-header',
  m: 0,

  variants: {
    level: {
      1: {
        fontWeight: '$extra-bold',
        fontSize: '$header-1',
      },
      2: {
        fontWeight: '$bold',
        fontSize: '$header-2',
      },
      3: {
        fontWeight: '$semi-bold',
        fontSize: '$header-3',
      },
      4: {
        fontWeight: '$semi-bold',
        fontSize: '$header-4',
      },
    },
  },
});

/**
 * Heading is used to create the different heading levels of the typographic hierarchy
 */
export const Heading = React.forwardRef(function Heading(
  props: HeadingProps,
  ref: React.Ref<HTMLHeadingElement>
) {
  const { children, level = 3, ...otherProps } = props;

  let HeadingTag = `h${level}` as React.ElementType;

  return (
    <HeadingElement
      {...filterDOMProps(otherProps)}
      level={level}
      ref={ref}
      as={HeadingTag}
      data-level={level}
    >
      {children}
    </HeadingElement>
  );
});

Heading.toString = HeadingElement.toString;

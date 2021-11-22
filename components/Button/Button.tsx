import * as React from 'react';

import { useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';

import { RemixiconReactIconComponentType } from 'remixicon-react';

import { VisuallyHidden } from 'components/VisuallyHidden';
import { useObjectRef } from '@react-aria/utils';

import {
  AriaBaseButtonProps as ReactAriaAriaBaseButtonProps,
  LinkButtonProps as ReactAriaLinkButtonProps,
  ButtonProps as ReactAriaButtonProps,
} from '@react-types/button';

import * as Styles from './Button.styles';

export interface ButtonProps<T extends React.ElementType = 'button'>
  extends
  ReactAriaAriaBaseButtonProps,
  Omit<ReactAriaButtonProps, 'children' | 'isDisabled'>,
  ReactAriaLinkButtonProps<T> {
  /** */
  as?: T | React.JSXElementConstructor<any>
  /**
   * Textual label for button
   */
  label: string;
  /**
   * Supportive icon for the textual label
   */
  Icon?: RemixiconReactIconComponentType;
  /**
   * Hide textual label for the user
   * @default false
   */
  hideLabel?: boolean;
  /** 
   * The visual style of the Button 
   * @default 'primary' 
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
}

/**
 * Buttons allow the user to perform an action or navigate to another page.
 * The button supports various styles for different use cases, and are ideal
 * to get the attention of a user when they need to do something or to move
 * further in the flow.
 */
export const Button = React.forwardRef(function _Button<T extends React.ElementType = 'button'>(props: ButtonProps<T>, forwardRef: React.ForwardedRef<HTMLButtonElement>) {
  const ref = useObjectRef(forwardRef)

  const { as: ElementType = 'button', Icon, label, hideLabel = false, variant } = props;

  const { buttonProps } = useButton({ elementType: ElementType, ...props }, ref);
  const { hoverProps } = useHover({});

  return (
    <ElementType
      {...mergeProps(buttonProps, hoverProps)}
      className={Styles.container({
        variant: variant || 'primary',
      })}
      ref={ref}
    >
      {hideLabel ? (
        <VisuallyHidden>{label}</VisuallyHidden>
      ) : (
        <span className={Styles.label()}>{label}</span>
      )}
      {Icon ? (
        <div className={Styles.iconWrapper()}>
          <Icon className={Styles.icon()} />
        </div>
      ) : null}
    </ElementType>
  );
});

import React from 'react';
import { AccordionContentProps } from './AccordionContent';
import { AccordionHeaderProps } from './AccordionHeader';

type AccordionItemElements = React.ReactElement<
  AccordionHeaderProps | AccordionContentProps
>;

export interface AccordionItemProps {
  /**
   * Unique value to identify the accordion item with
   */
  value: string;
  /**
   * Visible content if item is active
   */
  children: AccordionItemElements[];
}

export function AccordionItem(props: AccordionItemProps) {
  return <>{props.children}</>;
}

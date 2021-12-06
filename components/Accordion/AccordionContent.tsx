import React from 'react';

import * as Styles from './AccordionContent.styles';

import { AccordionItemContext } from './AccordionItemContext';

export interface AccordionContentProps {
  /**
   * Visible content if the accordion item is active
   */
  children: React.ReactNode;
}

export function AccordionContent(props: AccordionContentProps) {
  const { children } = props;

  const context = React.useContext(AccordionItemContext);

  const { regionProps } = context.props;
  const { isExpanded } = context.state;

  return (
    <div
      {...regionProps}
      className={Styles.container({
        isExpanded,
      })}
    >
      {children}
    </div>
  );
}

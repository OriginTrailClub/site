import React from 'react';

import Image from 'next/image';

import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon';
import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon';

import * as Styles from './AccordionHeader.styles';

import { AccordionItemContext } from './AccordionItemContext';

export interface AccordionHeaderProps {
  /**
   * Textual label for accordion header
   */
  title: string;
  /**
   * Icon to identify the accordion header with
   */
  icon: string;
}

export function AccordionHeader(props: AccordionHeaderProps) {
  const { title, icon } = props;

  const context = React.useContext(AccordionItemContext);

  const { buttonProps } = context.props;
  const { buttonRef } = context.refs;

  const { isExpanded } = context.state;

  return (
    <h3 className={Styles.container()}>
      <button className={Styles.trigger()} {...buttonProps} ref={buttonRef}>
        <div className={Styles.icon()}>
          <Image src={icon} alt={title} width={32} height={32} />
        </div>
        <span className={Styles.label()}>{title}</span>
        <div className={Styles.indicator()}>
          {isExpanded ? <ArrowDownSLineIcon /> : <ArrowRightSLineIcon />}
        </div>
      </button>
    </h3>
  );
}

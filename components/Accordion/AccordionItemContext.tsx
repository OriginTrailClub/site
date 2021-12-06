import * as React from 'react';

import { AccordionItemAria } from '@react-aria/accordion';

interface AccordionItemContext<T> {
  state: {
    isExpanded: boolean;
  };
  refs: {
    buttonRef: React.MutableRefObject<HTMLButtonElement>;
  };
  props: {
    buttonProps: AccordionItemAria['buttonProps'];
    regionProps: AccordionItemAria['regionProps'];
  };
}

export const AccordionItemContext = React.createContext<
  AccordionItemContext<any>
>(null!);

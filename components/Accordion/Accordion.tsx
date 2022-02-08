import * as React from 'react';

import * as Styles from './Accordion.styles';

import { TreeState, useTreeState } from '@react-stately/tree';
import { useAccordion, useAccordionItem } from '@react-aria/accordion';

import { AccordionItem, AccordionItemProps } from './AccordionItem';
import { AccordionHeader, AccordionHeaderProps } from './AccordionHeader';
import { AccordionContent, AccordionContentProps } from './AccordionContent';

import { AccordionItemContext } from './AccordionItemContext';

import { Item } from '@react-stately/collections';
import { CollectionChildren, Node, Expandable } from '@react-types/shared';

type AccordionElements = React.ReactElement<AccordionItemProps>;

export interface AccordionProps extends Expandable {
  /**
   * The children of the <Accordion> element. Should include one or multiple `<Accordion.Item>` elements.
   */
  children: React.ReactNode;
}

interface IAccordionComposition {
  Item: React.FC<AccordionItemProps>;
  Header: React.FC<AccordionHeaderProps>;
  Content: React.FC<AccordionContentProps>;
}

export interface AccordionRenderedProps extends Expandable {
  children: CollectionChildren<object>;
}

interface AccordionItemRenderedProps<T> {
  item: Node<T>;
  state: TreeState<T>;
}

function AccordionItemRendered<T>(props: AccordionItemRenderedProps<T>) {
  const { item, state } = props;

  let ref = React.useRef<HTMLButtonElement>(null!);

  let { buttonProps, regionProps } = useAccordionItem(props, state, ref);

  return (
    <AccordionItemContext.Provider
      value={{
        state: {
          isExpanded: state.expandedKeys.has(item.key),
        },
        props: {
          buttonProps,
          regionProps,
        },
        refs: {
          buttonRef: ref,
        },
      }}
    >
      <div className={Styles.item()}>{item.rendered}</div>
    </AccordionItemContext.Provider>
  );
}

function AccordionRendered(props: AccordionRenderedProps) {
  const ref = React.useRef(null);

  let state = useTreeState({
    ...props,
    selectionMode: 'none',
  });
  let { accordionProps } = useAccordion(props, state, ref);

  return (
    <div {...accordionProps} ref={ref} className={Styles.container()}>
      {Array.from(state.collection).map((item) => (
        <AccordionItemRendered key={item.key} item={item} state={state} />
      ))}
    </div>
  );
}

export const Accordion: React.FC<AccordionProps> &
  IAccordionComposition = function Accordion(props: AccordionProps) {
  const { children, onExpandedChange, defaultExpandedKeys } = props;

  return (
    <AccordionRendered
      onExpandedChange={onExpandedChange}
      defaultExpandedKeys={defaultExpandedKeys}
    >
      {(React.Children.toArray(children) as AccordionElements[]).map(
        (child) => (
          <Item key={child.props.value} textValue={child.props.value}>
            {child}
          </Item>
        )
      )}
    </AccordionRendered>
  );
};

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

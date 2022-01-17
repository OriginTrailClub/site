import * as React from 'react';

import { DOMProps } from '@react-types/shared';
import { Item, useCollection } from '@react-stately/collections';
import { ListCollection } from '@react-stately/list';

import { TabsContext } from './TabsContext';
import { TabsPanelProps } from './TabsPanel';

type TabPanelElements = React.ReactElement<TabsPanelProps>;

export interface TabsPanelsProps extends DOMProps {
  /**
   * All Tab elements all the Tabs.Panel keys should match the key of the corresponding Tabs.Tab
   */
  children: TabPanelElements[];
}

export function TabsPanels(props: TabsPanelsProps) {
  const { children } = props;

  const {
    state,
    props: { defaultSelectedKey },
  } = React.useContext(TabsContext);

  const { tabsListState } = state;

  const elements = React.useMemo((): TabPanelElements[] => {
    return React.Children.toArray(children).map((child, index) => {
      const { value } = (child as TabPanelElements).props;

      return (
        <Item key={value} textValue={value}>
          {child}
        </Item>
      );
    });
  }, [children]);

  const collection = useCollection(
    { children: elements },
    (nodes) => new ListCollection(nodes),
    { suppressTextValueWarning: true }
  );

  const selectedKey = tabsListState?.selectedKey ?? defaultSelectedKey;

  const selectedItem = collection.getItem(selectedKey);

  return (
    <React.Fragment key={selectedKey}>
      {selectedItem ? selectedItem.rendered : null}
    </React.Fragment>
  );
}

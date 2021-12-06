import * as React from 'react';

import { CollectionChildren, DOMProps } from '@react-types/shared';
import { Item, useCollection } from '@react-stately/collections';
import { ListCollection } from '@react-stately/list';

import { TabsContext } from './TabsContext';
import { TabsPanelProps } from './TabsPanel';

export interface TabsPanelsRenderedProps extends DOMProps {
  children: CollectionChildren<object>;
}

function TabsPanelsRendered(props: TabsPanelsRenderedProps) {
  const tabsContext = React.useContext(TabsContext);
  const { state } = tabsContext;
  const { tabsListState } = state;

  const collection = useCollection(
    { ...props },
    (nodes) => new ListCollection(nodes),
    { suppressTextValueWarning: true }
  );

  const selectedItem = collection.getItem(
    tabsListState?.selectedKey ?? collection.getFirstKey()
  );

  return (
    <div key={tabsListState?.selectedKey}>
      {selectedItem ? selectedItem.props.children : null}
    </div>
  );
}

type TabsTabListElement = React.ReactElement<TabsPanelProps>;

export interface TabsPanelsProps extends DOMProps {
  /**
   * All Tab elements all the Tabs.Panel keys should match the key of the corresponding Tabs.Tab
   */
  children: TabsTabListElement[];
}

export function TabsPanels(props: TabsPanelsProps) {
  return (
    <TabsPanelsRendered>
      {React.Children.map(props.children, (child) => (
        <Item key={child.key}>{child.props.children}</Item>
      ))}
    </TabsPanelsRendered>
  );
}

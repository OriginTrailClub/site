import * as React from 'react';

import * as Styles from './TabsTabList.styles';
import { TabsContext } from './TabsContext';

import { CollectionChildren, DOMProps, Node } from '@react-types/shared';
import { useTabListState } from '@react-stately/tabs';
import { useTabList, useTab } from '@react-aria/tabs';
import { SingleSelectListState } from '@react-stately/list';
import { Item } from '@react-stately/collections';
import { TabsTabProps } from './TabsTab';

interface TabsTabInnerProps<T> extends DOMProps {
  item: Node<T>;
  state: SingleSelectListState<T>;
}

function TabsTabInner<T>(props: TabsTabInnerProps<T>) {
  const { state, item } = props;

  const { key } = item;

  let ref = React.useRef<HTMLDivElement>(null!);

  let { tabProps } = useTab({ key }, state, ref);

  return (
    <div {...tabProps} className={Styles.tab()} ref={ref}>
      <label className={Styles.tabLabel()}>{item.rendered}</label>
    </div>
  );
}

export interface TabsTabListInnerProps extends DOMProps {
  children: CollectionChildren<object>;
}

function TabsTabListInner(props: TabsTabListInnerProps) {
  const tabContext = React.useContext(TabsContext);
  const { state: tabsState } = tabContext;
  const { setTabsListState } = tabsState;

  const ref = React.useRef<HTMLDivElement>(null!);

  const state = useTabListState({ children: props.children });
  const { tabListProps } = useTabList({ ...props }, state, ref);

  React.useEffect(() => {
    setTabsListState(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state.disabledKeys,
    state.selectedItem,
    state.selectedKey,
    props.children,
    setTabsListState,
  ]);

  return (
    <div {...tabListProps} className={Styles.tabs()} ref={ref}>
      {Array.from(state.collection).map((item) => (
        <TabsTabInner key={item.key} item={item} state={state} />
      ))}
    </div>
  );
}

type TabsTabListElement = React.ReactElement<TabsTabProps>;

export interface TabsTabListProps extends DOMProps {
  /**
   * All Tab elements all the Tabs.Tab keys should match the key of the corresponding Tabs.Panel 
   */
  children: TabsTabListElement[];
}

export function TabsTabList(props: TabsTabListProps) {
  return (
    <TabsTabListInner>
      {React.Children.map(props.children, (child) => (
        <Item key={child.key}>{child.props.label}</Item>
      ))}
    </TabsTabListInner>
  );
}

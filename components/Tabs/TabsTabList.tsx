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

type TabsTabListElement = React.ReactElement<TabsTabProps>;

export interface TabsTabListProps extends DOMProps {
  /**
   * All Tab elements all the Tabs.Tab keys should match the key of the corresponding Tabs.Panel
   */
  children: TabsTabListElement[];
}


export function TabsTabList(props: TabsTabListProps) {
  const { children } = props;

  const { state } = React.useContext(TabsContext);
  const { setTabsListState } = state;

  const ref = React.useRef<HTMLDivElement>(null!);

  const elements = React.useMemo((): CollectionChildren<TabsTabListElement> => {
    return React.Children.toArray(children).map((child, index) => {
      const { value } = (child as TabsTabListElement).props;

      return (
        <Item key={value} textValue={value}>
          {child}
        </Item>
      )
    });
  }, [children]);

  const tabListState = useTabListState({ children: elements });
  const { tabListProps } = useTabList({ children: elements }, tabListState, ref);

  React.useEffect(() => {
    setTabsListState(tabListState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    tabListState.disabledKeys,
    tabListState.selectedItem,
    tabListState.selectedKey,
    props.children,
    setTabsListState,
  ]);

  return (
    <div {...tabListProps} className={Styles.tabs()} ref={ref} key={tabListState.selectedKey}>
      {Array.from(tabListState.collection).map(item => (
        <TabsTabInner key={item.key} item={item} state={tabListState} />
      ))}
    </div>
  );
}
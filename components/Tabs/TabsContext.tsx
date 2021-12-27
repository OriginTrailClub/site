import * as React from 'react';
import { TabListState } from '@react-stately/tabs';

interface TabsContext<T> {
  state: {
    tabsListState: TabListState<T>;
    setTabsListState: (state: TabListState<T>) => void;
  };

  props: {
    defaultSelectedKey?: React.Key,
  }
}

export const TabsContext = React.createContext<TabsContext<any>>(null!);

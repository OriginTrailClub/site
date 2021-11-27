import * as React from 'react';
import { TabListState } from '@react-stately/tabs';

interface TabsContext<T> {
  state: {
    tabsListState: TabListState<T>;
    setTabsListState: (state: TabListState<T>) => void;
  };
}

export const TabsContext = React.createContext<TabsContext<any>>(null!);

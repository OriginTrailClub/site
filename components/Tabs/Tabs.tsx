import * as React from 'react';

import { TabsTabList, TabsTabListProps } from './TabsTabList';
import { TabsTab, TabsTabProps } from './TabsTab';
import { TabsPanels, TabsPanelsProps } from './TabsPanels';
import { TabsPanel, TabsPanelProps } from './TabsPanel';

import { TabListState } from '@react-stately/tabs';

import { TabsContext } from './TabsContext';

type TabsElements = React.ReactElement<TabsTabListProps | TabsPanelsProps>;

export interface TabsProps {
  /**
   * The children of the <Tabs> element. Should include `<Tabs.TabList>` and `<Tabs.Panels>` elements. 
   */
  children: TabsElements | TabsElements[];
}

interface ITabsComposition {
  TabList: React.FC<TabsTabListProps>;
  Tab: React.FC<TabsTabProps>;
  Panels: React.FC<TabsPanelsProps>;
  Panel: React.FC<TabsPanelProps>;
}

export const Tabs: React.FC<TabsProps> & ITabsComposition = function Tabs(
  props
) {
  const { children } = props;

  const [tabsListState, setTabsListState] = React.useState<
    TabListState<unknown>
  >(null!);

  return (
    <TabsContext.Provider
      value={{
        state: {
          tabsListState,
          setTabsListState,
        },
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

Tabs.TabList = TabsTabList;
Tabs.Tab = TabsTab;
Tabs.Panels = TabsPanels;
Tabs.Panel = TabsPanel;

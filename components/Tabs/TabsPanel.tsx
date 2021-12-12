import { useTabPanel } from '@react-aria/tabs';
import React from 'react';
import { TabsContext } from './TabsContext';

export interface TabsPanelProps {
  /**
   * Unique value for the Tabs.Panel there should match the value of the corresponding Tabs.Tab
   */
  value: string;
  /**
   * Visible content if tab is active
   */
  children: React.ReactNode;
}

export function TabsPanel(props: TabsPanelProps) {

  const { children } = props;

  const { state } = React.useContext(TabsContext);

  const { tabsListState } = state;

  const ref = React.useRef<HTMLDivElement>(null!)

  const { tabPanelProps } = useTabPanel({}, tabsListState, ref);

  return (
    <div {...tabPanelProps} ref={ref}>
      {children}
    </div>
  )
}

import React from 'react';

export interface TabsPanelProps {
  /**
   * Unique key for the Tabs.Panel there should match the key of the corresponding Tabs.Tab 
   */
  key: string;
  /**
   * Visible content if tab is active
   */
  children: React.ReactNode;
}

export function TabsPanel(props: TabsPanelProps): null {
  return null;
}

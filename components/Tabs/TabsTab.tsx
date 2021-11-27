import { Item } from '@react-stately/collections';
import { ItemProps } from '@react-types/shared';
import React from 'react';

export interface TabsTabProps {
  /**
   * Unique key for the Tabs.Tab there should match the key of the corresponding Tabs.Panel
   */
  key: string;
  /**
   * Textual label for tab
   */
  label: string;
}

export function TabsTab(props: TabsTabProps): null {
  return null;
}

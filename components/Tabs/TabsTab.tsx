export interface TabsTabProps {
  /**
   * Unique value for the Tabs.Tab there should match the value of the corresponding Tabs.Panel
   */
  value: string;
  /**
   * Textual label for tab
   */
  label: string;
}

export function TabsTab(props: TabsTabProps) {
  return <>{props.label}</>;
}

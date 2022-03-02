import * as Styles from './OverviewLayoutSidebar.styles';

export interface OverviewLayoutSidebarProps {
  children: React.ReactNode;
}

export function OverviewLayoutSidebar(props: OverviewLayoutSidebarProps) {
  const { children } = props;

  return <aside className={Styles.container()}>{children}</aside>;
}

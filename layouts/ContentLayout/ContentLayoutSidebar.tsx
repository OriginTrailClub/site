import * as Styles from './ContentLayoutSidebar.styles';

export interface ContentLayoutSidebarProps {
  children: React.ReactNode;
}

export function ContentLayoutSidebar(props: ContentLayoutSidebarProps) {
  const { children } = props;

  return <aside className={Styles.container()}>{children}</aside>;
}

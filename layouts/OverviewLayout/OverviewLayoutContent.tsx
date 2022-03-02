import * as Styles from './OverviewLayoutContent.styles';

export interface OverviewLayoutContentProps {
  children: React.ReactNode;
}

export function OverviewLayoutContent(props: OverviewLayoutContentProps) {
  const { children } = props;

  return <section className={Styles.container()}>{children}</section>;
}

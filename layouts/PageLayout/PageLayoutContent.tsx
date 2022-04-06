import * as Styles from './PageLayoutContent.styles';

export interface PageLayoutContentProps {
  children: React.ReactNode;
}

export function PageLayoutContent(props: PageLayoutContentProps) {
  const { children } = props;

  return <div className={Styles.container()}>{children}</div>;
}

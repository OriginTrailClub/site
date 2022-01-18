import * as Styles from './ContentLayoutContent.styles';

export interface ContentLayoutContentProps {
  children: React.ReactNode;
}

export function ContentLayoutContent(props: ContentLayoutContentProps) {
  const { children } = props;

  return <section className={Styles.container()}>{children}</section>;
}

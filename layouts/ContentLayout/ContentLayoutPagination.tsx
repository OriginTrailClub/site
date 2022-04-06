import * as Styles from './ContentLayoutPagination.styles';

export interface ContentLayoutPaginationProps {
  children: React.ReactNode;
}

export function ContentLayoutPagination(props: ContentLayoutPaginationProps) {
  const { children } = props;

  return <div className={Styles.container()}>{children}</div>;
}

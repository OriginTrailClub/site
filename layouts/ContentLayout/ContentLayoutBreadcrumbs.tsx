import * as Styles from './ContentLayoutBreadcrumbs.styles';

import { ContentLayoutBreadcrumbProps } from './ContentLayoutBreadcrumb';

type ContentLayoutBreadcrumbsElements = React.ReactElement<ContentLayoutBreadcrumbProps>;

export interface ContentLayoutBreadcrumbsProps {
  children:
    | ContentLayoutBreadcrumbsElements
    | ContentLayoutBreadcrumbsElements[];
}

export function ContentLayoutBreadcrumbs(props: ContentLayoutBreadcrumbsProps) {
  const { children } = props;

  return <div className={Styles.container()}>{children}</div>;
}

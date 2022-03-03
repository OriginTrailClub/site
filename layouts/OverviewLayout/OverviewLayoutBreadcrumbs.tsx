import React from 'react';

import * as Styles from './OverviewLayoutBreadcrumbs.styles';

export interface OverviewLayoutBreadcrumbsProps {
  children: React.ReactNode;
}

export function OverviewLayoutBreadcrumbs(
  props: OverviewLayoutBreadcrumbsProps
) {
  const { children } = props;

  return <div className={Styles.container()}>{children}</div>;
}

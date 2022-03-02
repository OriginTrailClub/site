import React from 'react';

import * as Styles from './ContentLayoutBreadcrumbs.styles';

export interface ContentLayoutBreadcrumbsProps {
  children: React.ReactNode
}

export function ContentLayoutBreadcrumbs(props: ContentLayoutBreadcrumbsProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      {children}
    </div>
  );
}

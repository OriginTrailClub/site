import { useBreadcrumbs } from '@react-aria/breadcrumbs';
import React from 'react';

import * as Styles from './Breadcrumbs.styles';

import { BreadcrumbsBreadcrumb } from './BreadcrumbsBreadcrumb';
import { BreadcrumbsBreadcrumbContext } from './BreadcrumbsBreadcrumbContext';

export type BreadcrumbsProps = {
  children: React.ReactElement | React.ReactElement[];
};

export function Breadcrumbs(props: BreadcrumbsProps) {
  const { children } = props;

  const { navProps } = useBreadcrumbs(props);

  const childCount = React.Children.count(children);

  return (
    <nav {...navProps} className={Styles.container()}>
      <ul className={Styles.list()}>
        {React.Children.map(children, (child, index) => (
          <BreadcrumbsBreadcrumbContext.Provider
            value={{ props: { isCurrent: index === childCount - 1 } }}
          >
            {child}
          </BreadcrumbsBreadcrumbContext.Provider>
        ))}
      </ul>
    </nav>
  );
}

Breadcrumbs.Breadcrumb = BreadcrumbsBreadcrumb;

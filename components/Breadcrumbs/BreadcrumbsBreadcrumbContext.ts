import * as React from 'react';

interface BreadcrumbsBreadcrumbContext<T> {
  props: {
    isCurrent: boolean;
  };
}

export const BreadcrumbsBreadcrumbContext = React.createContext<
  BreadcrumbsBreadcrumbContext<any>
>(null!);

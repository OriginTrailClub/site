import React from 'react';

import * as Styles from './Pagination.styles';

import { PaginationNext } from './PaginationNext';
import { PaginationPrevious } from './PaginationPrevious';
import { PaginationCounter } from './PaginationCounter';

export type BreadcrumbsProps = {
  children: React.ReactElement | React.ReactElement[];
  'aria-label'?: string;
};

export function Pagination(props: BreadcrumbsProps) {
  const { children, 'aria-label': ariaLabel = 'Pagination' } = props;

  return (
      <nav aria-label={ariaLabel} className={Styles.container()}>
          {children}
      </nav>
  );
}

Pagination.Next = PaginationNext;
Pagination.Previous = PaginationPrevious;
Pagination.Counter = PaginationCounter;

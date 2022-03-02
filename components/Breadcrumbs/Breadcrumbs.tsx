import * as Styles from './Breadcrumbs.styles';

import { BreadcrumbsBreadcrumb } from './BreadcrumbsBreadcrumb';

export type BreadcrumbsProps = {
  children: React.ReactNode;
};

export function Breadcrumbs(props: BreadcrumbsProps) {
  return <ul className={Styles.container()}>{props.children}</ul>;
}

Breadcrumbs.Breadcrumb = BreadcrumbsBreadcrumb;

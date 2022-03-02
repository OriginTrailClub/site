import { Breadcrumbs, BreadcrumbsBreadcrumbProps } from 'components/Breadcrumbs';

export type ContentLayoutBreadcrumbProps = BreadcrumbsBreadcrumbProps;

export function ContentLayoutBreadcrumb(props: ContentLayoutBreadcrumbProps) {
  return <Breadcrumbs.Breadcrumb {...props} />;
}

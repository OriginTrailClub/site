import {
  ContentLayoutBreadcrumbs,
  ContentLayoutBreadcrumbsProps,
} from './ContentLayoutBreadcrumbs';
import {
  ContentLayoutTitle,
  ContentLayoutTitleProps,
} from './ContentLayoutTitle';
import {
  ContentLayoutContent,
  ContentLayoutContentProps,
} from './ContentLayoutContent';
import {
  ContentLayoutSidebar,
  ContentLayoutSidebarProps,
} from './ContentLayoutSidebar';
import {
  ContentLayoutPagination,
  ContentLayoutPaginationProps,
} from './ContentLayoutPagination';

import * as Styles from './ContentLayout.styles';

type ContentLayoutElements = React.ReactElement<
  | ContentLayoutBreadcrumbsProps
  | ContentLayoutTitleProps
  | ContentLayoutContentProps
  | ContentLayoutSidebarProps
  | ContentLayoutPaginationProps
>;

export interface PageLayoutProps {
  /**
   * React elements which are either PageLayout.Header, PageLayout.Content or PageLayout.Footer
   */
  children: ContentLayoutElements | ContentLayoutElements[];
}

interface IPageLayoutComposition {
  Breadcrumbs: React.FC<ContentLayoutBreadcrumbsProps>;
  Title: React.FC<ContentLayoutTitleProps>;
  Content: React.FC<ContentLayoutContentProps>;
  Sidebar: React.FC<ContentLayoutSidebarProps>;
  Pagination: React.FC<ContentLayoutPaginationProps>;
}

export const ContentLayout: React.FC<PageLayoutProps> & IPageLayoutComposition =
  function PageLayout(props) {
    const { children } = props;

    return (
      <div className={Styles.container()}>
        <main className={Styles.contents()}>{children}</main>
      </div>
    );
  };

ContentLayout.Breadcrumbs = ContentLayoutBreadcrumbs;
ContentLayout.Title = ContentLayoutTitle;
ContentLayout.Content = ContentLayoutContent;
ContentLayout.Sidebar = ContentLayoutSidebar;
ContentLayout.Pagination = ContentLayoutPagination;

import {
  ContentLayoutBreadcrumbs,
  ContentLayoutBreadcrumbsProps,
} from './ContentLayoutBreadcrumbs';
import {
  ContentLayoutBreadcrumb,
  ContentLayoutBreadcrumbProps,
} from './ContentLayoutBreadcrumb';
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
  ContentLayoutNavigation,
  ContentLayoutNavigationProps,
} from './ContentLayoutNavigation';

import * as Styles from './ContentLayout.styles';

type ContentLayoutElements = React.ReactElement<
  | ContentLayoutBreadcrumbsProps
  | ContentLayoutBreadcrumbProps
  | ContentLayoutTitleProps
  | ContentLayoutContentProps
  | ContentLayoutSidebarProps
  | ContentLayoutNavigationProps
>;

export interface PageLayoutProps {
  /**
   * React elements which are either PageLayout.Header, PageLayout.Content or PageLayout.Footer
   */
  children: ContentLayoutElements | ContentLayoutElements[];
}

interface IPageLayoutComposition {
  Breadcrumbs: React.FC<ContentLayoutBreadcrumbsProps>;
  Breadcrumb: React.FC<ContentLayoutBreadcrumbProps>;
  Title: React.FC<ContentLayoutTitleProps>;
  Content: React.FC<ContentLayoutContentProps>;
  Sidebar: React.FC<ContentLayoutSidebarProps>;
  Navigation: React.FC<ContentLayoutNavigationProps>;
}

export const ContentLayout: React.FC<PageLayoutProps> &
  IPageLayoutComposition = function PageLayout(props) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <main className={Styles.contents()}>{children}</main>
    </div>
  );
};

ContentLayout.Breadcrumbs = ContentLayoutBreadcrumbs;
ContentLayout.Breadcrumb = ContentLayoutBreadcrumb;
ContentLayout.Title = ContentLayoutTitle;
ContentLayout.Content = ContentLayoutContent;
ContentLayout.Sidebar = ContentLayoutSidebar;
ContentLayout.Navigation = ContentLayoutNavigation;
import {
  OverviewLayoutBreadcrumbs,
  OverviewLayoutBreadcrumbsProps,
} from './OverviewLayoutBreadcrumbs';
import {
  OverviewLayoutTitle,
  OverviewLayoutTitleProps,
} from './OverviewLayoutTitle';
import {
  OverviewLayoutContent,
  OverviewLayoutContentProps,
} from './OverviewLayoutContent';
import {
  OverviewLayoutSidebar,
  OverviewLayoutSidebarProps,
} from './OverviewLayoutSidebar';

import * as Styles from './OverviewLayout.styles';

type OverviewLayoutElements = React.ReactElement<
  | OverviewLayoutBreadcrumbsProps
  | OverviewLayoutTitleProps
  | OverviewLayoutContentProps
  | OverviewLayoutSidebarProps
>;

export interface PageLayoutProps {
  /**
   * React elements which are either OverviewLayout.Breadcrumbs, OverviewLayout.Title, OverviewLayout.Content or OverviewLayout.Sidebar
   */
  children: OverviewLayoutElements | OverviewLayoutElements[];
}

interface IPageLayoutComposition {
  Breadcrumbs: React.FC<OverviewLayoutBreadcrumbsProps>;
  Title: React.FC<OverviewLayoutTitleProps>;
  Content: React.FC<OverviewLayoutContentProps>;
  Sidebar: React.FC<OverviewLayoutSidebarProps>;
}

export const OverviewLayout: React.FC<PageLayoutProps> &
  IPageLayoutComposition = function PageLayout(props) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <main className={Styles.contents()}>{children}</main>
    </div>
  );
};

OverviewLayout.Breadcrumbs = OverviewLayoutBreadcrumbs;
OverviewLayout.Title = OverviewLayoutTitle;
OverviewLayout.Content = OverviewLayoutContent;
OverviewLayout.Sidebar = OverviewLayoutSidebar;

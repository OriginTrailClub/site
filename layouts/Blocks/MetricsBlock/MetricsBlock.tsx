import * as React from 'react';

import * as Styles from './MetricsBlock.styles';

import {
  MetricsBlockCategory,
  MetricsBlockCategoryProps,
} from './MetricsBlockCategory';
import { MetricsBlockTitle, MetricsBlockTitleProps } from './MetricsBlockTitle';
import {
  MetricsBlockAction,
  MetricsBlockActionProps,
} from './MetricsBlockAction';
import {
  MetricsBlockMetrics,
  MetricsBlockMetricsProps,
} from './MetricsBlockMetrics';
import {
  MetricsBlockMetric,
  MetricsBlockMetricProps,
} from './MetricsBlockMetric';
import { Tabs } from 'components/Tabs';

type ArticleBlockElements = React.ReactElement<MetricsBlockCategoryProps>;

export interface MetricsBlockProps {
  children: ArticleBlockElements | ArticleBlockElements[];
}

interface IMetricsBlockLayoutComposition {
  Category: React.FC<MetricsBlockCategoryProps>;
  Title: React.FC<MetricsBlockTitleProps>;
  Action: React.FC<MetricsBlockActionProps>;
  Metrics: React.FC<MetricsBlockMetricsProps>;
  Metric: React.FC<MetricsBlockMetricProps>;
}

function MetricsBlockTabs(props: MetricsBlockProps) {
  const tabs = React.useMemo(() => {
    return React.Children.map(props.children, (child) => {
      return {
        key: child.props.label,
        tab: child.props.label,
        pannel: child,
      };
    });
  }, [props.children]);

  return (
    <Tabs>
      <Tabs.TabList>
        {tabs.map((tab) => (
          <Tabs.Tab label={tab.tab} value={tab.key} key={tab.key}/>
        ))}
      </Tabs.TabList>
      <Tabs.Panels>
        {tabs.map((tab) => (
          <Tabs.Panel value={tab.key} key={tab.key}>
            <div className={Styles.panel()}>{tab.pannel}</div>
          </Tabs.Panel>
        ))}
      </Tabs.Panels>
    </Tabs>
  );
}

export const MetricsBlock: React.FC<MetricsBlockProps> &
  IMetricsBlockLayoutComposition = function MetricsBlock(props) {
  const count = React.Children.count(props.children);

  let children;

  if (count <= 1) {
    children = props.children;
  } else {
    children = <MetricsBlockTabs {...props} />;
  }

  return (
    <div className={Styles.container()}>
      <div className={Styles.contents()}>{children}</div>
    </div>
  );
};

MetricsBlock.Category = MetricsBlockCategory;
MetricsBlock.Title = MetricsBlockTitle;
MetricsBlock.Action = MetricsBlockAction;
MetricsBlock.Metrics = MetricsBlockMetrics;
MetricsBlock.Metric = MetricsBlockMetric;

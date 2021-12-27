import * as Styles from './MetricsBlockCategory.styles';

import { MetricsBlockActionProps } from './MetricsBlockAction';
import { MetricsBlockMetricProps } from './MetricsBlockMetric';
import { MetricsBlockTitleProps } from './MetricsBlockTitle';

type MetricsBlockCategoryElements = React.ReactElement<
  MetricsBlockTitleProps | MetricsBlockActionProps | MetricsBlockMetricProps
>;

export interface MetricsBlockCategoryProps {
  value: string;

  children?: MetricsBlockCategoryElements | MetricsBlockCategoryElements[];
}

export function MetricsBlockCategory(props: MetricsBlockCategoryProps) {
  return <div className={Styles.container()}>{props.children}</div>;
}

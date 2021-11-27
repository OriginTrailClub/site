import * as Styles from './MetricsBlockMetrics.styles';

import { MetricsBlockMetricProps } from './MetricsBlockMetric';

type MetricsBlockMetricsElements = React.ReactElement<MetricsBlockMetricProps>;

export interface MetricsBlockMetricsProps {
  children: MetricsBlockMetricsElements[];
}

export function MetricsBlockMetrics(props: MetricsBlockMetricsProps) {
  return <ul className={Styles.metrics()}>{props.children}</ul>;
}

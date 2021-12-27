import { Heading, HeadingProps } from 'components/Typography';

import * as Styles from './MetricsBlockTitle.styles';

export type MetricsBlockTitleProps = {
  children: string,
}

export function MetricsBlockTitle(props: MetricsBlockTitleProps) {
  const { children } = props;

  return (
    <strong className={Styles.container()}>
      {children}
    </strong>
  );
}

import { Heading, HeadingProps } from 'components/Typography';

import * as Styles from './MetricsBlockTitle.styles';

export type MetricsBlockTitleProps = Pick<HeadingProps, 'children'>;

export function MetricsBlockTitle(props: MetricsBlockTitleProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Heading level={3}>{children}</Heading>
    </div>
  );
}

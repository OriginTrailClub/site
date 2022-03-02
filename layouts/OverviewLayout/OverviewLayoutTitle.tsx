import { Heading, HeadingProps } from 'components/Typography';

import * as Styles from './OverviewLayoutTitle.styles';

export type OverviewLayoutTitleProps = Pick<HeadingProps, 'children'>;

export function OverviewLayoutTitle(props: OverviewLayoutTitleProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Heading level={1}>{children}</Heading>
    </div>
  );
}

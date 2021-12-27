import * as Styles from './UseCaseBlockTitle.styles';

import { Heading, HeadingProps } from 'components/Typography';

export type UseCaseBlockTitleProps = Pick<HeadingProps, 'children'>;

export function UseCaseBlockTitle(props: UseCaseBlockTitleProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Heading level={3} style={4}>{children}</Heading>
    </div>
  );
}

import { Heading, HeadingProps } from 'components/Typography';

import * as Styles from './ContentLayoutTitle.styles';

export type ContentLayoutTitleProps = Pick<HeadingProps, 'children'>;

export function ContentLayoutTitle(props: ContentLayoutTitleProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Heading level={1}>{children}</Heading>
    </div>
  );
}

import * as Styles from './SolutionsBlockTitle.styles';

import { Heading, HeadingProps } from 'components/Typography';

export type SolutionsBlockTitleProps = Pick<HeadingProps, 'children'>;

export function SolutionsBlockTitle(props: SolutionsBlockTitleProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Heading level={3}>{children}</Heading>
    </div>
  );
}

import * as Styles from './CompaniesBlockTitle.styles';

import { Heading, HeadingProps } from 'components/Typography';

export type CompaniesBlockTitleProps = Pick<HeadingProps, 'children'>;

export function CompaniesBlockTitle(props: CompaniesBlockTitleProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Heading level={3}>{children}</Heading>
    </div>
  );
}

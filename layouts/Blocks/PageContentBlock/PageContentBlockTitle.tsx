import * as Styles from './PageContentBlockTitle.styles';

import { Heading, HeadingProps } from 'components/Typography';

export type PageContentBlockTitleProps = Pick<HeadingProps, 'children'>;

export function PageContentBlockTitle(props: PageContentBlockTitleProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Heading level={2} style={3}>
        {children}
      </Heading>
    </div>
  );
}

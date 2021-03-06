import * as React from 'react';

import * as Styles from './SolutionsBlockTitle.styles';

import { SolutionsBlockContext } from './SolutionsBlockContext';

import { Heading, HeadingProps } from 'components/Typography';

export type SolutionsBlockTitleProps = Pick<HeadingProps, 'children'>;

export function SolutionsBlockTitle(props: SolutionsBlockTitleProps) {
  const { children } = props;

  const context = React.useContext(SolutionsBlockContext);

  const { titleProps } = context.props;

  return (
    <div className={Styles.container()}>
      <Heading {...titleProps} level={3} style={4}>
        {children}
      </Heading>
    </div>
  );
}

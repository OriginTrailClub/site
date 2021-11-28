import * as React from 'react';

import * as Styles from './SolutionsBlockCase.styles';

import { SolutionsBlockProblemProps } from './SolutionsBlockProblem';
import { SolutionsBlockSolutionProps } from './SolutionsBlockSolution';

type SolutionsBlockCaseElements = React.ReactElement<
  SolutionsBlockProblemProps | SolutionsBlockSolutionProps
>;

export interface SolutionsBlockCaseProps {
  children: SolutionsBlockCaseElements[];
}

export function SolutionsBlockCase(props: SolutionsBlockCaseProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <div className={Styles.contents()}>{children}</div>
    </div>
  );
}

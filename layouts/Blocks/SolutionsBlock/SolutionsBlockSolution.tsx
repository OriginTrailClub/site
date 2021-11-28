import * as React from 'react';

import CloseFillIcon from 'remixicon-react/CloseFillIcon';

import { Button } from 'components/Button';

import * as Styles from './SolutionsBlockSolution.styles';

import { SolutionsBlockDescriptionProps } from './SolutionsBlockDescription';
import { SolutionsBlockTitleProps } from './SolutionsBlockTitle';
import { SolutionsBlockImageProps } from './SolutionsBlockImage';

type SolutionsBlockSolutionElements = React.ReactElement<
  | SolutionsBlockDescriptionProps
  | SolutionsBlockTitleProps
  | SolutionsBlockImageProps
>;

export interface SolutionsBlockSolutionProps {
  children: SolutionsBlockSolutionElements[];
}

export function SolutionsBlockSolution(props: SolutionsBlockSolutionProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <div className={Styles.content()}>
        {children}
        <div className={Styles.close()}>
          <Button
            label="Show problem"
            variant="tertiary"
            hideLabel
            Icon={CloseFillIcon}
          />
        </div>
      </div>
    </div>
  );
}

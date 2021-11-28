import * as React from 'react';

import * as Styles from './SolutionsBlockProblem.styles';

import { SolutionsBlockDescriptionProps } from './SolutionsBlockDescription';
import { SolutionsBlockTitleProps } from './SolutionsBlockTitle';
import { SolutionsBlockImageProps } from './SolutionsBlockImage';
import { Button } from 'components/Button';
import ArrowRightFillIcon from 'remixicon-react/LightbulbFillIcon';

type SolutionsBlockProblemElements = React.ReactElement<
  | SolutionsBlockDescriptionProps
  | SolutionsBlockTitleProps
  | SolutionsBlockImageProps
>;

export interface SolutionsBlockProblemProps {
  children: SolutionsBlockProblemElements[];
}

export function SolutionsBlockProblem(props: SolutionsBlockProblemProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      {children}
      <div className={Styles.flip()}>
        <Button
          label="Show solution"
          variant="tertiary"
          hideLabel
          Icon={ArrowRightFillIcon}
        />
      </div>
    </div>
  );
}

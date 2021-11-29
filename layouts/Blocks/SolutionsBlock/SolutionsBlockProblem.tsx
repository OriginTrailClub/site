import * as React from 'react';

import ArrowRightFillIcon from 'remixicon-react/LightbulbFillIcon';

import { Button } from 'components/Button';

import * as Styles from './SolutionsBlockProblem.styles';

import { SolutionsBlockDescriptionProps } from './SolutionsBlockDescription';
import { SolutionsBlockTitleProps } from './SolutionsBlockTitle';
import { SolutionsBlockImageProps } from './SolutionsBlockImage';

import { SolutionsBlockContext } from './SolutionsBlockContext';

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

  const context = React.useContext(SolutionsBlockContext);

  const { state } = context;

  const { triggerProps } = context.props;
  const { triggerRef } = context.refs;

  return (
    <div className={Styles.container()}>
      {children}
      <div className={Styles.flip()}>
        <Button
          {...triggerProps}
          label="Show solution"
          variant="tertiary"
          hideLabel
          Icon={ArrowRightFillIcon}
          onPress={() => {
            state.open();
          }}
          ref={triggerRef}
        />
      </div>
    </div>
  );
}

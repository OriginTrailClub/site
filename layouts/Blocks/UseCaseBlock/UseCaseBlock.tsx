import * as React from 'react';
import type * as Stitches from '@stitches/react';

import * as Styles from './UseCaseBlock.styles';

import { UseCaseBlockCase, UseCaseBlockCaseProps } from './UseCaseBlockCase';
import { UseCaseBlockTitle, UseCaseBlockTitleProps } from './UseCaseBlockTitle';
import {
  UseCaseBlockDescription,
  UseCaseBlockDescriptionProps,
} from './UseCaseBlockDescription';
import { UseCaseBlockImage, UseCaseBlockImageProps } from './UseCaseBlockImage';

type UseCaseBlockElements = React.ReactElement<UseCaseBlockCaseProps>;

export interface UseCaseBlockProps {
  children: UseCaseBlockElements | UseCaseBlockElements[];
}

interface IOverviewLayoutComposition {
  Case: React.FC<UseCaseBlockCaseProps>;
  Title: React.FC<UseCaseBlockTitleProps>;
  Description: React.FC<UseCaseBlockDescriptionProps>;
  Image: React.FC<UseCaseBlockImageProps>;
}

interface IgetGridVariablesOptions {
  /**
   * Total item of elements in the grid
   */
  count: number;
  /**
   * Max count of rows before it should overflow verticaly
   */
  maxRows: number;
  /**
   * Max count of columns before it should overflow verticaly
   */
  maxColumns: number;
}

/* A helper method which determines the rows and columns for a grid layout */
const getGridVariables = (options: IgetGridVariablesOptions): Stitches.CSS => {
  const { count, maxRows, maxColumns } = options;

  const rowCount = Math.min(maxRows, Math.ceil(count / maxColumns));
  const columnCount = Math.ceil(count / rowCount);

  let cssVars = {
    $$rowCount: rowCount,
    $$columnCount: columnCount,
    $$maxColumnCount: maxColumns,
  } as Stitches.CSS;

  if (maxColumns >= Math.ceil(count / rowCount)) {
    // If all elements fit horizontaly we shouldn't squish in any overlapping element
    cssVars['$$minParticipantSize'] = '$$maxParticipantSize';
  }

  return cssVars;
};

export const UseCaseBlock: React.FC<UseCaseBlockProps> &
  IOverviewLayoutComposition = function UseCaseBlock(props) {
  const { children } = props;

  const count = React.Children.count(children);

  return (
    <div className={Styles.container()}>
      <div className={Styles.contents()}>
        <div
          className={Styles.cases({
            css: {
              ...getGridVariables({
                count: count,
                maxRows: 1,
                maxColumns: 1,
              }),
              '@bp3': getGridVariables({
                count: count,
                maxRows: 2,
                maxColumns: 2,
              }),
              '@bp4': getGridVariables({
                count: count,
                maxRows: 2,
                maxColumns: 3,
              }),
            },
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

UseCaseBlock.Case = UseCaseBlockCase;
UseCaseBlock.Title = UseCaseBlockTitle;
UseCaseBlock.Description = UseCaseBlockDescription;
UseCaseBlock.Image = UseCaseBlockImage;

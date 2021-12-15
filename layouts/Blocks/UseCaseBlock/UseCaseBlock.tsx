import * as React from 'react';
import type * as Stitches from '@stitches/react';

import { GridCollection, GridState, useGridState } from '@react-stately/grid';
import { useListState } from '@react-stately/list';
import { Item } from '@react-stately/collections';
import { useGrid, useGridCell, useGridRow } from '@react-aria/grid';

import { config } from 'stitches.config';
import {useMediaQuery} from 'hooks/useMediaQuery';

import * as Styles from './UseCaseBlock.styles';

import { UseCaseBlockCase, UseCaseBlockCaseProps } from './UseCaseBlockCase';
import { UseCaseBlockTitle, UseCaseBlockTitleProps } from './UseCaseBlockTitle';
import {
  UseCaseBlockDescription,
  UseCaseBlockDescriptionProps,
} from './UseCaseBlockDescription';
import { UseCaseBlockImage, UseCaseBlockImageProps } from './UseCaseBlockImage';
import { GridNode } from '@react-types/grid';

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
    $$columnCount: columnCount,
    $$maxColumnCount: maxColumns,
  } as Stitches.CSS;

  if (maxColumns >= Math.ceil(count / rowCount)) {
    // If all elements fit horizontaly we shouldn't squish in any overlapping element
    cssVars['$$minParticipantSize'] = '$$maxParticipantSize';
  }

  return cssVars;
};

// Splits an array in n groups
function part<T>(arr: T[], n: number) {
  const count = Math.ceil(arr.length / n);
  return [...Array(n)].map((_, i) => arr.slice(i * count, (i + 1) * count));
};

interface CellProps<T> {
  item: GridNode<T>,
  state: GridState<T, GridCollection<T>>
}

function Cell<T>(props: CellProps<T>) {
  const { state, item } = props;

  let cellRef = React.useRef<HTMLDivElement>(null!);

  let { gridCellProps } = useGridCell({
    node: item,
    focusMode: 'cell'
  }, state, cellRef);

  return (
    <div {...gridCellProps} ref={cellRef} className={Styles.cell()}>
      {item.rendered}
    </div>
  )
}

interface RowProps<T> {
  item: GridNode<T>,
  state: GridState<T, GridCollection<T>>
}

function Row<T>(props: RowProps<T>) {
  const { state, item } = props;

  let rowRef = React.useRef<HTMLDivElement>(null!);

  let { rowProps } = useGridRow({ node: item }, state, rowRef);

  return (
    <div {...rowProps} ref={rowRef} className={Styles.row()}>
      {Array.from(item.childNodes).map(cell => (
        <Cell key={cell.key} state={state} item={cell} />
      ))}
    </div>
  )
}

export const UseCaseBlock: React.FC<UseCaseBlockProps> &
  IOverviewLayoutComposition = function UseCaseBlock(props) {
    const { children } = props;

    const count = React.Children.count(children);

    const casesListRef = React.useRef<HTMLDivElement>(null);

    const elements = React.useMemo((): UseCaseBlockElements[] => {
      return React.Children.toArray(children).map((child, index) => {
        return (
          <Item key={index}>
            {child}
          </Item>
        );
      });
    }, [children]);

    let state = useListState({
      children: elements,
    });

    let useTwoColumnLayout = useMediaQuery(config.media.bp3);

    let rows = React.useMemo(() => {
      console.log(useTwoColumnLayout);

      if (useTwoColumnLayout) {
        return part(Array.from(state.collection), 2);
      }

      return [Array.from(state.collection)];
    }, [useTwoColumnLayout, state.collection])

    let gridState = useGridState({
      collection: new GridCollection({
        columnCount: 4,
        items: rows.map(row => ({
          type: 'item',
          childNodes: row.map((cell, index) => ({
            ...cell,
            index,
            type: 'cell'
          }))
        }))
      })
    });

    let { gridProps } = useGrid({
      focusMode: 'cell'
    }, gridState, casesListRef);

    return (
      <div className={Styles.container()}>
        <div className={Styles.contents()}>
          <div
            ref={casesListRef}
            {...gridProps}
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
            {Array.from(gridState.collection).map(item =>
              (<Row
                key={item.key}
                state={gridState}
                item={item}
              />)
            )}
          </div>
        </div>
      </div>
    );
  };

UseCaseBlock.Case = UseCaseBlockCase;
UseCaseBlock.Title = UseCaseBlockTitle;
UseCaseBlock.Description = UseCaseBlockDescription;
UseCaseBlock.Image = UseCaseBlockImage;

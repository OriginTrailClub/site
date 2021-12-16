import * as React from 'react';
import type * as Stitches from '@stitches/react';

import { GridNode } from '@react-types/grid';
import { AriaLabelingProps } from '@react-types/shared';
import { GridCollection, GridState, useGridState } from '@react-stately/grid';
import { useGrid, useGridCell, useGridRow } from '@react-aria/grid';
import { Item } from '@react-stately/collections';
import { useListState } from '@react-stately/list';

import * as Styles from './ParticipantsBlock.styles';

import {
  ParticipantsBlockParticipant,
  ParticipantsBlockParticipantProps,
} from './ParticipantsBlockParticipant';
import {
  ParticipantsBlockTitle,
  ParticipantsBlockTitleProps,
} from './ParticipantsBlockTitle';
import {
  ParticipantsBlockDescription,
  ParticipantsBlockDescriptionProps,
} from './ParticipantsBlockDescription';
import {
  ParticipantsBlockImage,
  ParticipantsBlockImageProps,
} from './ParticipantsBlockImage';

type ParticipantsBlockElements = React.ReactElement<ParticipantsBlockParticipantProps>;

export interface ParticipantsBlockProps extends AriaLabelingProps {
  children: ParticipantsBlockElements | ParticipantsBlockElements[];
}

interface IOverviewLayoutComposition {
  Participant: React.FC<ParticipantsBlockParticipantProps>;
  Image: React.FC<ParticipantsBlockImageProps>;
  Title: React.FC<ParticipantsBlockTitleProps>;
  Description: React.FC<ParticipantsBlockDescriptionProps>;
}

interface IgetGridVariablesOptions {
  /**
   * Total item of elements in the grid
   */
  count: number;
  /**
   * Max count of columns before it should overflow verticaly
   */
  maxColumns: number;
}

/* A helper method which determines the rows and columns for a grid layout */
const getGridVariables = (options: IgetGridVariablesOptions): Stitches.CSS => {
  const { count, maxColumns } = options;

  let cssVars = {
    $$columnCount: count,
    $$maxColumnCount: maxColumns,
  } as Stitches.CSS;

  if (maxColumns >= count) {
    // If all elements fit horizontaly we shouldn't squish in any overlapping element
    cssVars['$$minParticipantSize'] = '$$maxParticipantSize';
  }

  return cssVars;
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
    <div {...gridCellProps} ref={cellRef} className={Styles.cell({
      type: item.props.type,
    })}>
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

export const ParticipantsBlock: React.FC<ParticipantsBlockProps> &
  IOverviewLayoutComposition = function ParticipantsBlock(props) {
  const { children, ...otherProps } = props;

  let participantsRef = React.useRef<HTMLDivElement>(null!);

  const count = React.Children.count(children);

  const elements = React.useMemo((): ParticipantsBlockElements[] => {
    return (React.Children.toArray(children) as ParticipantsBlockElements[]).map((child, index) => {
      return (
        <Item key={index} textValue={child.props.value}>
          {child}
        </Item>
      );
    });
  }, [children]);

  let state = useListState({
    children: elements,
  });

  let gridState = useGridState({
    collection: new GridCollection({
      columnCount: 4,
      items: [{
        type: 'item',
        childNodes: Array.from(state.collection).map((cell, index) => ({
          ...cell,
          index: index,
          type: 'cell'
        }))
      }]
    })
  });

  let { gridProps } = useGrid({
    focusMode: 'cell',
    ...otherProps,
  }, gridState, participantsRef);

  return (
    <div className={Styles.container()}>
      <div className={Styles.contents()}>
        <div
          {...gridProps}
          ref={participantsRef}
          className={Styles.participants({
            css: {
              ...getGridVariables({
                count: count,
                maxColumns: 1,
              }),
              '@bp2': getGridVariables({
                count: count,
                maxColumns: 2,
              }),
              '@bp3': getGridVariables({
                count: count,
                maxColumns: 3,
              }),
              '@bp4': getGridVariables({
                count: count,
                maxColumns: 4,
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

ParticipantsBlock.Participant = ParticipantsBlockParticipant;
ParticipantsBlock.Title = ParticipantsBlockTitle;
ParticipantsBlock.Description = ParticipantsBlockDescription;
ParticipantsBlock.Image = ParticipantsBlockImage;

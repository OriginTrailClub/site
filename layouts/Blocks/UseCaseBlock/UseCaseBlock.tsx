import * as React from 'react';
import type * as Stitches from '@stitches/react';

import { GridCollection, GridState, useGridState } from '@react-stately/grid';
import { useListState } from '@react-stately/list';
import { Item } from '@react-stately/collections';
import { useGrid, useGridCell, useGridRow } from '@react-aria/grid';
import { GridNode } from '@react-types/grid';
import { AriaLabelingProps } from '@react-types/shared';

import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';
import ArrowLeftLineIcon from 'remixicon-react/ArrowLeftLineIcon';

import { config } from 'stitches.config';

import { VisuallyHidden } from 'components/VisuallyHidden';

import { useMediaQuery } from 'hooks/useMediaQuery';

import * as Styles from './UseCaseBlock.styles';

import { UseCaseBlockCase, UseCaseBlockCaseProps } from './UseCaseBlockCase';
import { UseCaseBlockTitle, UseCaseBlockTitleProps } from './UseCaseBlockTitle';
import {
  UseCaseBlockDescription,
  UseCaseBlockDescriptionProps,
} from './UseCaseBlockDescription';
import { UseCaseBlockImage, UseCaseBlockImageProps } from './UseCaseBlockImage';
import { useButton } from '@react-aria/button';
import { FocusWithinProps, useFocusWithin } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';
import { PressEvents } from '@react-types/shared';

type UseCaseBlockElements = React.ReactElement<UseCaseBlockCaseProps>;

export interface UseCaseBlockProps extends AriaLabelingProps {
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

interface NavigationProps {
  variant?: 'next' | 'previous';

  isVisible: boolean;

  onPress: PressEvents['onPress'];
}

function Navigation(props: NavigationProps) {
  const { isVisible, onPress, variant = 'next' } = props;

  let ref = React.useRef<HTMLButtonElement>(null!);

  const { buttonProps } = useButton({ elementType: 'button', onPress }, ref);

  const Icon = variant === 'previous' ? ArrowLeftLineIcon : ArrowRightLineIcon

  return (
    <div
      className={Styles.navigation({
        variant,
        visible: isVisible,
      })}
    >
      <button {...buttonProps} className={Styles.navigationButton()} tabIndex={-1}>
        <VisuallyHidden>Show next</VisuallyHidden>
        <span className={Styles.navigationIcon()}>
          <Icon />
        </span>
      </button>
    </div>
  )
}

// Splits an array in n groups
function part<T>(arr: T[], n: number) {
  const count = Math.ceil(arr.length / n);
  return [...Array(n)].map((_, i) => arr.slice(i * count, (i + 1) * count));
}

// Debounce a execution of the callback for x miliseconds
const debounce = <F extends (...args: any[]) => any>(
  callback: F,
  wait: number
) => {
  let timeoutId: number;

  return (...args: Parameters<F>) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

interface CellProps<T> {
  item: GridNode<T>;
  state: GridState<T, GridCollection<T>>;
  gridRef: React.MutableRefObject<HTMLDivElement>;
  onFocusWithin: FocusWithinProps['onFocusWithin'],
}

function Cell<T>(props: CellProps<T>) {
  const { state, item, gridRef, onFocusWithin } = props;

  const [isVisible, setIsVisible] = React.useState(false);

  let cellRef = React.useRef<HTMLDivElement>(null!);

  let { gridCellProps } = useGridCell(
    {
      node: item,
      focusMode: 'cell',
    },
    state,
    cellRef
  );

  const { focusWithinProps } = useFocusWithin({
    onFocusWithin: onFocusWithin,
  });

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.intersectionRatio >= 1),
      {
        root: gridRef.current,
        threshold: 1.0,
      }
    );
    observer.observe(cellRef.current);
    return () => observer.disconnect();
  }, [gridRef, cellRef]);

  return (
    <div
      {...mergeProps(gridCellProps, focusWithinProps)}
      data-visible={isVisible}
      ref={cellRef}
      className={Styles.cell({
        type: item.props.type,
      })}
    >
      {item.rendered}
    </div>
  );
}

interface RowProps<T> {
  item: GridNode<T>;
  state: GridState<T, GridCollection<T>>;
  children: React.ReactNode;
}

function Row<T>(props: RowProps<T>) {
  const { state, item, children } = props;

  let rowRef = React.useRef<HTMLDivElement>(null!);

  let { rowProps } = useGridRow({ node: item }, state, rowRef);

  return (
    <div {...rowProps} ref={rowRef} className={Styles.row()}>
      {children}
    </div>
  );
}

export const UseCaseBlock: React.FC<UseCaseBlockProps> &
  IOverviewLayoutComposition = function UseCaseBlock(props) {
    const { children, ...otherProps } = props;

    const count = React.Children.count(children);

    const casesListRef = React.useRef<HTMLDivElement>(null!);
    const spacerRef = React.useRef<HTMLDivElement>(null!);
    const checkNavigationRef = React.useRef<ReturnType<typeof setTimeout>>();

    const [showNext, setShowNext] = React.useState(false);
    const [showPrevious, setShowPrevious] = React.useState(false);

    const elements = React.useMemo((): UseCaseBlockElements[] => {
      return (React.Children.toArray(children) as UseCaseBlockElements[]).map(
        (child, index) => {
          return (
            <Item key={index} textValue={child.props.value}>
              {child}
            </Item>
          );
        }
      );
    }, [children]);

    let state = useListState({
      children: elements,
    });

    let useTwoColumnLayout = useMediaQuery(config.media.bp3);

    let rows = React.useMemo(() => {
      let cells = Array.from(state.collection).map((cell, index) => ({
        ...cell,
        props: {
          type: index % 3,
        },
      }));

      if (useTwoColumnLayout) {
        return part(Array.from(cells), 2);
      }

      return [Array.from(cells)];
    }, [useTwoColumnLayout, state.collection]);

    let gridState = useGridState({
      collection: new GridCollection({
        columnCount: 4,
        items: rows.map((row) => ({
          type: 'item',
          childNodes: row.map((cell, index) => ({
            ...cell,
            index: index,
            type: 'cell',
          })),
        })),
      }),
    });

    let { gridProps } = useGrid(
      {
        focusMode: 'cell',
        ...otherProps,
      },
      gridState,
      casesListRef
    );

    const getNextCell = React.useCallback((addition) => {
      const slides = casesListRef.current?.querySelectorAll<HTMLElement>(
        `.${Styles.cell()}`
      );
      if (slides) {
        for (let index of Array.from(slides.keys())) {
          let currentCell = slides.item(index);

          if (currentCell.dataset.visible === 'false') {
            continue;
          }

          let nextCell = slides.item(index + addition);

          if (nextCell?.dataset.visible === 'false') {
            return nextCell;
          }
        }
      }
    }, []);

    const scrollCellIntoView = React.useCallback(
      (cell) => {
        const { clientWidth: listWidth } = casesListRef.current;
        const { clientWidth: cellWidth, offsetLeft: cellOffsetLeft } = cell;

        let left = cellOffsetLeft - (listWidth - cellWidth) / 2;

        if (useTwoColumnLayout) {
          // TODO implement navigation for two column layout (stick to right)
        }

        casesListRef.current.scrollTo({ left, behavior: 'smooth' });
      },
      [useTwoColumnLayout]
    );

    const onHandleNextPress = React.useCallback(() => {
      const nextCell = getNextCell(1);

      if (nextCell) {
        scrollCellIntoView(nextCell);
      }
    }, [getNextCell, scrollCellIntoView]);

    const onHandlePreviousPress = React.useCallback(() => {
      const prevCell = getNextCell(-1);

      if (prevCell) {
        scrollCellIntoView(prevCell);
      }
    }, [getNextCell, scrollCellIntoView]);

    const onCellFocusWithin = React.useCallback(
      (e) => {
        setTimeout(() => {
          scrollCellIntoView(e.target);
        });
      },
      [scrollCellIntoView]
    );

    const checkNavigation = React.useCallback(() => {
      const { scrollLeft, scrollWidth, clientWidth } = casesListRef.current;
      const { offsetWidth } = spacerRef.current;

      setShowNext(scrollWidth - scrollLeft - clientWidth > offsetWidth);
      setShowPrevious(scrollLeft > offsetWidth);
    }, []);

    React.useEffect(() => {
      if (checkNavigationRef.current) {
        clearTimeout(checkNavigationRef.current);
      }

      checkNavigationRef.current = setTimeout(() => {
        requestAnimationFrame(() => {
          checkNavigation();
        });
      }, 100);
    });

    React.useEffect(() => {
      const casesList = casesListRef.current;
      if (casesList) {
        const handleScrollEnd = debounce(checkNavigation, 100);

        casesList.addEventListener('scroll', handleScrollEnd);
        window.addEventListener('resize', handleScrollEnd);
        return () => {
          casesList.removeEventListener('scroll', handleScrollEnd);
          window.removeEventListener('resize', handleScrollEnd);
        };
      }
    }, [checkNavigation]);

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
            {/* We use the spacer elements to detect if the left or right navigation is still necessary */}
            <div className={Styles.spacer()} ref={spacerRef} />
            {Array.from(gridState.collection).map((item) => (
              <Row key={item.key} state={gridState} item={item}>
                {Array.from(item.childNodes).map((cell) => (
                  <Cell
                    key={cell.key}
                    state={gridState}
                    item={cell}
                    gridRef={casesListRef}
                    onFocusWithin={onCellFocusWithin}
                  />
                ))}
              </Row>
            ))}
          </div>
          <Navigation onPress={onHandleNextPress} isVisible={showNext} variant="next" />
          <Navigation onPress={onHandlePreviousPress} isVisible={showPrevious} variant="previous" />
        </div>
      </div>
    );
  };

UseCaseBlock.Case = UseCaseBlockCase;
UseCaseBlock.Title = UseCaseBlockTitle;
UseCaseBlock.Description = UseCaseBlockDescription;
UseCaseBlock.Image = UseCaseBlockImage;

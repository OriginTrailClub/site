import * as React from 'react';
import type * as Stitches from '@stitches/react';

import { GridNode } from '@react-types/grid';
import { AriaLabelingProps } from '@react-types/shared';

import { GridCollection, GridState, useGridState } from '@react-stately/grid';
import { useGrid, useGridCell, useGridRow } from '@react-aria/grid';
import { FocusWithinProps, useFocusWithin } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';

import { Item } from '@react-stately/collections';
import { useListState } from '@react-stately/list';

import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';
import ArrowLeftLineIcon from 'remixicon-react/ArrowLeftLineIcon';

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
import { VisuallyHidden } from 'components/VisuallyHidden';
import { useButton } from '@react-aria/button';
import { PressEvents } from '@react-types/shared';

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

interface NavigationProps {
  variant?: 'next' | 'previous';

  disabled: boolean;

  onPress: PressEvents['onPress'];
}

function Navigation(props: NavigationProps) {
  const { disabled, onPress, variant = 'next' } = props;

  let ref = React.useRef<HTMLButtonElement>(null!);

  const { buttonProps } = useButton({ elementType: 'button', isDisabled: disabled, onPress }, ref);

  const Icon = variant === 'previous' ? ArrowLeftLineIcon : ArrowRightLineIcon

  return (
    <div
      className={Styles.navigation({
        variant,
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
      ([entry]) => {
        setIsVisible(entry.intersectionRatio >= 1)
      },
      {
        root: gridRef.current.parentElement,
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

export const ParticipantsBlock: React.FC<ParticipantsBlockProps> &
  IOverviewLayoutComposition = function ParticipantsBlock(props) {
  const { children, ...otherProps } = props;

  let participantsRef = React.useRef<HTMLDivElement>(null!);
  let spacerRef = React.useRef<HTMLDivElement>(null!);
  let checkNavigationRef = React.useRef<ReturnType<typeof setTimeout>>();

  const [showNext, setShowNext] = React.useState(false);
  const [showPrevious, setShowPrevious] = React.useState(false);

  const count = React.Children.count(children);

  const elements = React.useMemo((): ParticipantsBlockElements[] => {
    return (React.Children.toArray(
      children
    ) as ParticipantsBlockElements[]).map((child, index) => {
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
      items: [
        {
          type: 'item',
          childNodes: Array.from(state.collection).map((cell, index) => ({
            ...cell,
            index: index,
            type: 'cell',
          })),
        },
      ],
    }),
  });

  let { gridProps } = useGrid(
    {
      focusMode: 'cell',
      ...otherProps,
    },
    gridState,
    participantsRef
  );

  const getNextCell = React.useCallback((addition) => {
    const cells = participantsRef.current?.querySelectorAll<HTMLElement>(
      `.${Styles.cell()}`
    );

    if (cells) {
      for (let index of Array.from(cells.keys())) {
        let currentCell = cells.item(index);

        if (currentCell.dataset.visible === 'false') {
          continue;
        }

        let nextCell = cells.item(index + addition);

        if (nextCell?.dataset.visible === 'false') {
          return nextCell;
        }
      }
    }
  }, []);

  const scrollCellIntoView = React.useCallback(
    (cell) => {
      const { clientWidth: listWidth } = participantsRef.current;
      const { clientWidth: cellWidth, offsetLeft: cellOffsetLeft } = cell;

      let left = cellOffsetLeft - (listWidth - cellWidth) / 2;

      participantsRef.current.scrollTo({ left, behavior: 'smooth' });
    },
    []
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
    const { scrollLeft, scrollWidth, clientWidth } = participantsRef.current;
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
    const participantsList = participantsRef.current;
    if (participantsList) {
      const handleScrollEnd = debounce(checkNavigation, 100);

      participantsList.addEventListener('scroll', handleScrollEnd);
      window.addEventListener('resize', handleScrollEnd);
      return () => {
        participantsList.removeEventListener('scroll', handleScrollEnd);
        window.removeEventListener('resize', handleScrollEnd);
      };
    }
  }, [checkNavigation]);

  return (
    <div className={Styles.container({
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
    })}>
      <div className={Styles.contents()}>
        <div
          ref={participantsRef}
          {...gridProps}
          className={Styles.participants()}
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
                  gridRef={participantsRef}
                  onFocusWithin={onCellFocusWithin}
                />
              ))}
            </Row>
          ))}
        </div>
        <Navigation onPress={onHandleNextPress} disabled={!showNext} variant="next" />
        <Navigation onPress={onHandlePreviousPress} disabled={!showPrevious} variant="previous" />
      </div>
    </div>
  );
};

ParticipantsBlock.Participant = ParticipantsBlockParticipant;
ParticipantsBlock.Title = ParticipantsBlockTitle;
ParticipantsBlock.Description = ParticipantsBlockDescription;
ParticipantsBlock.Image = ParticipantsBlockImage;

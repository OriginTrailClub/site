import * as React from 'react';

import { GridItemProps } from './GridItem';

import * as Styles from './GridGroup.styles';

export interface GridGroupProps
  extends Omit<React.HTMLProps<HTMLElement>, 'className' | 'style'> {
  /**
   * React elements of the Element Type Grid.Item
   */
  children:
    | React.ReactElement<GridItemProps>
    | React.ReactElement<GridItemProps>[];
}

export function GridGroup(props: GridGroupProps) {
  const { children } = props;

  return (
    <section {...props} className={Styles.container()}>
      {children}
    </section>
  );
}

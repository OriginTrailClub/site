import * as React from 'react';

import * as Styles from './PaginationCounter.styles';

export type PaginationCounterProps = {
    current: number;
    total: number;
}

export function PaginationCounter(props: PaginationCounterProps) {
    const { current, total } = props;

    return (
        <div className={Styles.container()}>
            {current} of {total}
        </div>
    );
}
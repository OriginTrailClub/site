import * as Styles from './PaginationPrevious.styles';

import ArrowLeftLineIcon from 'remixicon-react/ArrowLeftLineIcon';

import { Button, ButtonProps } from 'components/Button';

type PaginationPreviousProps = Partial<Pick<ButtonProps, 'label'>>;

export function PaginationPrevious(props: PaginationPreviousProps) {
    const { label = 'Previous' } = props;

    return (
        <div className={Styles.container()}>
            <Button label={label} variant="secondary" hideLabel Icon={ArrowLeftLineIcon} />
        </div>
    );
}
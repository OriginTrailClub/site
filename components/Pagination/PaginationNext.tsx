import * as Styles from './PaginationNext.styles';

import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';

import { Button, ButtonProps } from 'components/Button';

type PaginationNextProps = Partial<Pick<ButtonProps, 'label'>>;

export function PaginationNext(props: PaginationNextProps) {
    const { label = 'Next' } = props;

    return (
        <div className={Styles.container()}>
            <Button label={label} variant="secondary" hideLabel Icon={ArrowRightLineIcon} />
        </div>
    );
}
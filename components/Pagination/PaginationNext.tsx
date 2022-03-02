import * as Styles from './PaginationNext.styles';

import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';

import { Button, ButtonProps } from 'components/Button';

type PaginationNextProps = Omit<ButtonProps, 'variant' | 'hideLabel' | 'Icon'>;

export function PaginationNext(props: PaginationNextProps) {
  const { label = 'Next', ...otherProps } = props;

  return (
    <div className={Styles.container()}>
      <Button
        {...otherProps}
        label={label}
        variant="secondary"
        hideLabel
        Icon={ArrowRightLineIcon}
      />
    </div>
  );
}

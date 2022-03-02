import * as Styles from './PaginationPrevious.styles';

import ArrowLeftLineIcon from 'remixicon-react/ArrowLeftLineIcon';

import { Button, ButtonProps } from 'components/Button';

type PaginationPreviousProps = Omit<
  ButtonProps,
  'variant' | 'hideLabel' | 'Icon'
>;

export function PaginationPrevious(props: PaginationPreviousProps) {
  const { label = 'Previous', ...otherProps } = props;

  return (
    <div className={Styles.container()}>
      <Button
        {...otherProps}
        label={label}
        variant="secondary"
        hideLabel
        Icon={ArrowLeftLineIcon}
      />
    </div>
  );
}

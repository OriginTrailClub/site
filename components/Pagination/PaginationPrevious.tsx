import * as React from 'react';

import * as Styles from './PaginationPrevious.styles';

import ArrowLeftLineIcon from 'remixicon-react/ArrowLeftLineIcon';

import { Button, ButtonProps } from 'components/Button';

type PaginationPreviousProps = Omit<
  ButtonProps,
  'variant' | 'hideLabel' | 'Icon'
>;

export const PaginationPrevious = React.forwardRef(function PaginationPrevious(
  props: PaginationPreviousProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const { label = 'Previous', ...otherProps } = props;

  return (
    <div className={Styles.container()}>
      <Button
        {...otherProps}
        label={label}
        variant="secondary"
        hideLabel
        Icon={ArrowLeftLineIcon}
        ref={ref}
      />
    </div>
  );
});

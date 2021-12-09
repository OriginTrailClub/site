import * as React from 'react';

import ArrowRightFillIcon from 'remixicon-react/ArrowRightFillIcon';

import * as Styles from './CompaniesBlockCallToAction.styles';

import { Button, ButtonProps } from 'components/Button';

export type CompaniesBlockCallToActionProps = Omit<ButtonProps, 'variant'>;

export function CompaniesBlockCallToAction(
  props: CompaniesBlockCallToActionProps
) {
  return (
    <div className={Styles.container()}>
      <Button {...props} variant="tertiary" Icon={ArrowRightFillIcon} />
    </div>
  );
}

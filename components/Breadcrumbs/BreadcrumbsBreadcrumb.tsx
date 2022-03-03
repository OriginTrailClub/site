import * as React from 'react';

import { useBreadcrumbItem } from '@react-aria/breadcrumbs';

import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon';

import { BreadcrumbsBreadcrumbContext } from './BreadcrumbsBreadcrumbContext';

import * as Styles from './BreadcrumbsBreadcrumb.styles';
import { useObjectRef } from '@react-aria/utils';

export type BreadcrumbsBreadcrumbProps = {
  label: string;
};


export const BreadcrumbsBreadcrumb = React.forwardRef(function BreadcrumbsBreadcrumb(
  props: BreadcrumbsBreadcrumbProps,
  forwardRef: React.Ref<HTMLAnchorElement>
) {
  const ref = useObjectRef(forwardRef);

  const context = React.useContext(BreadcrumbsBreadcrumbContext);
  const { props: contextProps } = context;
  const { isCurrent } = contextProps;

  const { label, ...otherProps } = props;

  const { itemProps } = useBreadcrumbItem(
    {
      children: label,
      isCurrent,
      ...props,
    },
    ref
  );

  return (
    <li className={Styles.container()}>
      <a
        className={Styles.link({ current: isCurrent })}
        ref={ref}
        {...otherProps}
        {...itemProps}
      >
        {props.label}
      </a>
      {isCurrent ? null : <ArrowRightSLineIcon className={Styles.icon()} />}
    </li>
  );
});

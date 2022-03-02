import * as Styles from './BreadcrumbsBreadcrumb.styles';

import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon';

export type BreadcrumbsBreadcrumbProps = {
  label: string;
};

export function BreadcrumbsBreadcrumb(props: BreadcrumbsBreadcrumbProps) {
  return (
    <li className={Styles.container()}>
      <a className={Styles.link()} {...props}>
        {props.label}
      </a>
      <div className={Styles.icon()}>
        <ArrowRightSLineIcon />
      </div>
    </li>
  );
}

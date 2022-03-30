import Image from 'next/image';

import { Heading } from 'components/Typography';

import * as Styles from './TimelineBlockEvent.styles';

export type TimelineBlockEventProps = {
  title: string;
  icon: string;
  date?: Date | null;
};

export function TimelineBlockEvent(props: TimelineBlockEventProps) {
  const { title, icon, date = null } = props;

  return (
    <li className={Styles.container()}>
      <div className={Styles.logo()}>
        <Image src={icon} alt={title}             objectFit="contain"
            layout="fill" />
      </div>
      <strong className={Styles.title()}>{title}</strong>
      <span
        className={Styles.badge({
          style: date == null ? 'announced' : 'launched',
        })}
      >
        {date ? date.getFullYear() : 'TBD'}
      </span>
    </li>
  );
}

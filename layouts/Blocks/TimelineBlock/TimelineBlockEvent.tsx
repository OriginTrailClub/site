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
      <Image src={icon} alt={title} width={56} height={56} />
      <span className={Styles.title()}>
        <Heading level={4}>{title}</Heading>
      </span>
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

import * as React from 'react';

import * as Styles from './TimelineBlock.styles';

import {
  TimelineBlockEvent,
  TimelineBlockEventProps,
} from './TimelineBlockEvent';

type TimelineBlockElements = React.ReactElement<TimelineBlockEventProps>;

export interface TimelineBlockProps {
  children: TimelineBlockElements | TimelineBlockElements[];
}

interface ITimelineBlockPropsComposition {
  Event: React.FC<TimelineBlockEventProps>;
}

export const TimelineBlock: React.FC<TimelineBlockProps> &
  ITimelineBlockPropsComposition = function TimelineBlock(props) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <div className={Styles.line()} />
      <div className={Styles.contents()}>
        <div className={Styles.scrollArea()}>
          <div className={Styles.scrollContent()}>
            <ul className={Styles.events()}>{children}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

TimelineBlock.Event = TimelineBlockEvent;

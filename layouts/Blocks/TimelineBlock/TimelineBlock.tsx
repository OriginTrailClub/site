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
          <ul className={Styles.events({
            css: {
              $$eventCount: React.Children.count(children),
            }
          })}>
            {children}
          </ul>
        </div>
      </div>
    );
  };

TimelineBlock.Event = TimelineBlockEvent;

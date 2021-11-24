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

// linear-gradient(to right,#fff 0,rgba(255,255,255,0.1) 10%,rgba(255,255,255,0.1) 90%,#fff 100%)

export const TimelineBlock: React.FC<TimelineBlockProps> &
  ITimelineBlockPropsComposition = function TimelineBlock(props) {
    const { children } = props;

    return (
      <div className={Styles.container()}>
        <div className={Styles.contents()}>
        <div className={Styles.line()} />
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

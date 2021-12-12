import * as React from 'react';

import { Item } from '@react-stately/collections';
import { SingleSelectListState } from '@react-stately/list';
import { useTabListState } from '@react-stately/tabs';
import { useTab, useTabList, useTabPanel } from '@react-aria/tabs';
import { Node } from '@react-types/shared';

import * as Styles from './QuotesBlock.styles';

import { QuotesBlockSlide, QuotesBlockSlideProps } from './QuotesBlockSlide';
import { QuotesBlockImage, QuotesBlockImageProps } from './QuotesBlockImage';
import { QuotesBlockQuote, QuotesBlockQuoteProps } from './QuotesBlockQuote';
import {
  QuotesBlockDescription,
  QuotesBlockDescriptionProps,
} from './QuotesBlockDescription';
import {
  QuotesBlockCaption,
  QuotesBlockCaptionProps,
} from './QuotesBlockCaption';
import { QuotesBlockAuthor, QuotesBlockAuthorProps } from './QuotesBlockAuthor';
import { QuotesBlockRole, QuotesBlockRoleProps } from './QuotesBlockRole';
import { VisuallyHidden } from 'components/VisuallyHidden';

type QuotesBlockElements = React.ReactElement<QuotesBlockSlideProps>;

interface SlideProps<T> {
  children: React.ReactNode,
  state: SingleSelectListState<T>;
}

function Slide<T>(props: SlideProps<T>) {
  const ref = React.useRef<HTMLDivElement>(null!);
  const { state, children } = props;

  const {tabPanelProps} = useTabPanel({}, state, ref);

  return (
    <div {...tabPanelProps} ref={ref} className={Styles.slide()}>
      {children}
    </div>
  )
}

interface IndicatorProps<T> {
  item: Node<T>;
  state: SingleSelectListState<T>;
}

function Indicator<T>(props: IndicatorProps<T>) {
  const { state, item } = props;

  const { key } = item;

  let ref = React.useRef<HTMLLIElement>(null!);

  let { tabProps } = useTab({ key }, state, ref);

  return (
    <li className={Styles.indicator()} {...tabProps} ref={ref}>
      <VisuallyHidden>{item.textValue}</VisuallyHidden>
    </li>
  );
}

export interface QuotesBlockSlide {
  children: QuotesBlockElements[];
}

interface IQuotesBlockComposition {
  Slide: React.FC<QuotesBlockSlideProps>;
  Image: React.FC<QuotesBlockImageProps>;
  Quote: React.FC<QuotesBlockQuoteProps>;
  Description: React.FC<QuotesBlockDescriptionProps>;
  Caption: React.FC<QuotesBlockCaptionProps>;
  Author: React.FC<QuotesBlockAuthorProps>;
  Role: React.FC<QuotesBlockRoleProps>;
}

export const QuotesBlock: React.FC<QuotesBlockSlide> &
  IQuotesBlockComposition = function (props) {
    const { children } = props;

    const elements = React.useMemo((): QuotesBlockElements[] => {
      return React.Children.toArray(children).map((child, index) => (
        <Item key={index} textValue={(child as QuotesBlockElements).props.value}>
          {child}
        </Item>
      ));
    }, [children]);

    const ref = React.useRef<HTMLUListElement>(null!);

    const state = useTabListState({
      children: elements,
      defaultSelectedKey: elements?.[0]?.key ?? undefined,
    });
    const { tabListProps } = useTabList({ ...props }, state, ref);

    return (
      <div className={Styles.container()}>
        <Slide state={state}>{state.selectedItem.rendered}</Slide>

        <div className={Styles.navigation()}>
          <div className={Styles.line()} />
          <div className={Styles.contents()}>
            <ul {...tabListProps} className={Styles.indicators()} ref={ref}>
              {Array.from(state.collection).map((item) => (
                <Indicator key={item.key} item={item} state={state} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

QuotesBlock.Slide = QuotesBlockSlide;
QuotesBlock.Image = QuotesBlockImage;
QuotesBlock.Quote = QuotesBlockQuote;
QuotesBlock.Description = QuotesBlockDescription;
QuotesBlock.Caption = QuotesBlockCaption;
QuotesBlock.Author = QuotesBlockAuthor;
QuotesBlock.Role = QuotesBlockRole;

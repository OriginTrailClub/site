import * as Styles from './QuotesBlockQuote.styles';

import { QuotesBlockDescriptionProps } from './QuotesBlockDescription';
import { QuotesBlockCaptionProps } from './QuotesBlockCaption';

type QuotesBlockQuoteElements = React.ReactElement<
  QuotesBlockDescriptionProps | QuotesBlockCaptionProps
>;

export interface QuotesBlockQuoteProps {
  children: QuotesBlockQuoteElements[];
}

export function QuotesBlockQuote(props: QuotesBlockQuoteProps) {
  const { children } = props;

  return <div className={Styles.container()}><div className={Styles.contents()}>{children}</div></div>;
}

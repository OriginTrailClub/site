import * as Styles from './QuotesBlockSlide.styles';

import { QuotesBlockImageProps } from './QuotesBlockImage';
import { QuotesBlockQuoteProps } from './QuotesBlockQuote';

type QuotesBlockSlideElements = React.ReactElement<
  QuotesBlockImageProps | QuotesBlockQuoteProps
>;

export interface QuotesBlockSlideProps {
  /**
   * Unique value to identify each individual slide with
   */
  value: string;

  children: QuotesBlockSlideElements[];
}

export function QuotesBlockSlide(props: QuotesBlockSlideProps) {
  const { children } = props;

  return <figure className={Styles.container()}>{children}</figure>;
}

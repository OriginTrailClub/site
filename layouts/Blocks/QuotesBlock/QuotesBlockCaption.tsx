import * as Styles from './QuotesBlockCaption.styles';

import { QuotesBlockAuthorProps } from './QuotesBlockAuthor';
import { QuotesBlockRoleProps } from './QuotesBlockRole';

type QuotesBlockCaptionElements = React.ReactElement<
  QuotesBlockAuthorProps | QuotesBlockRoleProps
>;

export interface QuotesBlockCaptionProps {
  children: QuotesBlockCaptionElements[];
}

export function QuotesBlockCaption(props: QuotesBlockCaptionProps) {
  const { children } = props;

  return <figcaption className={Styles.container()}>{children}</figcaption>;
}

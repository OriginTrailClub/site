import * as Styles from './QuotesBlockAuthor.styles';

export interface QuotesBlockAuthorProps {
  name: string;
}

export function QuotesBlockAuthor(props: QuotesBlockAuthorProps) {
  const { name } = props;

  return <strong className={Styles.container()}>{name}</strong>;
}

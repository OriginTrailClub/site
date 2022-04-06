import * as Styles from './Italic.styles';

export type ItalicProps = {
  children: React.ReactNode;
};

export function Italic(props: ItalicProps) {
  const { children } = props;

  return <em className={Styles.container()}>{children}</em>;
}

import * as Styles from './Block.styles';

export type BlockProps = {
  children: React.ReactNode;
};

export function Block(props: BlockProps) {
  const { children } = props;

  return <div className={Styles.container()}>{children}</div>;
}

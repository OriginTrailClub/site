import { Paragraph, ParagraphProps } from 'components/Typography';

export type ProductsBlockDescriptionProps = Pick<ParagraphProps, 'children'>;

export function ProductsBlockDescription(props: ProductsBlockDescriptionProps) {
  const { children } = props;

  return <Paragraph>{children}</Paragraph>;
}

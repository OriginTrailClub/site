import { Accordion, AccordionHeaderProps } from 'components/Accordion';

export type ProductsBlockHeaderProps = AccordionHeaderProps;

export function ProductsBlockHeader(props: ProductsBlockHeaderProps) {
  return <Accordion.Header {...props} />;
}

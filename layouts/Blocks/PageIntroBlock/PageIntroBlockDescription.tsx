import { Paragraph, ParagraphProps } from 'components/Typography';

export type PageIntroBlockDescriptionProps = Pick<ParagraphProps, 'children'>;

export function PageIntroBlockDescription(
  props: PageIntroBlockDescriptionProps
) {
  const { children } = props;

  return <Paragraph variant="intro">{children}</Paragraph>;
}

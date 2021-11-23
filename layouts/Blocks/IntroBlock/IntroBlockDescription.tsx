import { Paragraph, ParagraphProps } from 'components/Typography';

export type IntroBlockDescriptionProps = Pick<ParagraphProps, 'children'>;

export function IntroBlockDescription(props: IntroBlockDescriptionProps) {
  const { children } = props;

  return <Paragraph variant="intro">{children}</Paragraph>;
}

import { Paragraph, ParagraphProps } from 'components/Typography';

export type IntroductionBlockDescriptionProps = Pick<
  ParagraphProps,
  'children'
>;

export function IntroductionBlockDescription(
  props: IntroductionBlockDescriptionProps
) {
  const { children } = props;

  return <Paragraph variant="intro">{children}</Paragraph>;
}

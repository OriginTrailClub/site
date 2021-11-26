import { Paragraph, ParagraphProps } from 'components/Typography';

export type ParticipantsBlockDescriptionProps = Pick<ParagraphProps, 'children'>;

export function ParticipantsBlockDescription(props: ParticipantsBlockDescriptionProps) {
  const { children } = props;

  return (
    <Paragraph variant="compact">{children}</Paragraph>
  );
}

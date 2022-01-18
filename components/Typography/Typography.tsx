import { ParagraphProps } from './Paragraph';
import { HeadingProps } from './Heading';

import * as Styles from './Typography.styles';

type TypographyElement = React.ReactElement<
  ParagraphProps | HeadingProps
> | null;

export interface TypographyProps {
  children: TypographyElement | TypographyElement[];
}

export function Typography({ children }: TypographyProps) {
  return <div className={Styles.container()}>{children}</div>;
}

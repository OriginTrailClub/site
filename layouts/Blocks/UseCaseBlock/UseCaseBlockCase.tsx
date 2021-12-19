import * as Styles from './UseCaseBlockCase.styles';

import { UseCaseBlockTitleProps } from './UseCaseBlockTitle';
import { UseCaseBlockDescriptionProps } from './UseCaseBlockDescription';
import { UseCaseBlockImageProps } from './UseCaseBlockImage';

type UseCaseBlockCaseElements = React.ReactElement<
  UseCaseBlockTitleProps | UseCaseBlockDescriptionProps | UseCaseBlockImageProps
>;

export interface UseCaseBlockCaseProps {
  children: UseCaseBlockCaseElements | UseCaseBlockCaseElements[];

  /** A string representation of the use cases contents, used for features like typeahead. */
  value: string;
}

export function UseCaseBlockCase(props: UseCaseBlockCaseProps) {
  const { children } = props;

  return <article className={Styles.container()}>{children}</article>;
}

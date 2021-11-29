import * as React from 'react';

import CloseFillIcon from 'remixicon-react/CloseFillIcon';

import { Button } from 'components/Button';

import * as Styles from './SolutionsBlockSolution.styles';

import { SolutionsBlockDescriptionProps } from './SolutionsBlockDescription';
import { SolutionsBlockTitleProps } from './SolutionsBlockTitle';
import { SolutionsBlockImageProps } from './SolutionsBlockImage';

import { SolutionsBlockContext } from './SolutionsBlockContext';

import { mergeProps } from '@react-aria/utils';
import { DismissButton } from '@react-aria/overlays';
import { FocusScope } from '@react-aria/focus';

type SolutionsBlockSolutionElements = React.ReactElement<
  | SolutionsBlockDescriptionProps
  | SolutionsBlockTitleProps
  | SolutionsBlockImageProps
>;

export interface SolutionsBlockSolutionProps {
  children: SolutionsBlockSolutionElements[];
}

export function SolutionsBlockSolution(props: SolutionsBlockSolutionProps) {
  const context = React.useContext(SolutionsBlockContext);

  const { overlayProps, triggerOverlayProps, dialogProps } = context.props;

  const { children } = props;

  const { refs, state } = context;

  if (state.isOpen) {
    return (
      <FocusScope restoreFocus autoFocus>
        <div
          {...mergeProps(overlayProps, triggerOverlayProps, dialogProps)}
          ref={refs.overlayRef}
          className={Styles.container()}
        >
          <div className={Styles.content()}>
            {children}
            <div className={Styles.close()}>
              <Button
                label="Dismiss"
                variant="tertiary"
                hideLabel
                onPress={() => {
                  state.close();
                }}
                Icon={CloseFillIcon}
              />
            </div>
          </div>
          <DismissButton onDismiss={() => state.close()} />
        </div>
      </FocusScope>
    );
  }

  return null;
}

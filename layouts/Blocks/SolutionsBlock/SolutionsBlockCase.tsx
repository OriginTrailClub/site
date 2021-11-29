import * as React from 'react';

import * as Styles from './SolutionsBlockCase.styles';

import { SolutionsBlockProblemProps } from './SolutionsBlockProblem';
import { SolutionsBlockSolutionProps } from './SolutionsBlockSolution';

import { SolutionsBlockContext } from './SolutionsBlockContext';

import { useOverlayTrigger } from '@react-aria/overlays';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { useOverlay } from '@react-aria/overlays';
import { useDialog } from '@react-aria/dialog';

type SolutionsBlockCaseElements = React.ReactElement<
  SolutionsBlockProblemProps | SolutionsBlockSolutionProps
>;

export interface SolutionsBlockCaseProps {
  children: SolutionsBlockCaseElements[];
}

export function SolutionsBlockCase(props: SolutionsBlockCaseProps) {
  const { children } = props;

  const triggerRef = React.useRef<HTMLButtonElement>(null!);
  const overlayRef = React.useRef<HTMLDivElement>(null!);

  let state = useOverlayTriggerState({});

  let { triggerProps, overlayProps: triggerOverlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    triggerRef
  );

  let { overlayProps } = useOverlay(
    {
      onClose: () => {
        state.close();
      },
      isDismissable: true,
      shouldCloseOnBlur: true,
      isKeyboardDismissDisabled: true,
    },
    triggerRef
  );

  let { dialogProps, titleProps } = useDialog({}, triggerRef);

  return (
    <SolutionsBlockContext.Provider
      value={{
        state: state,
        props: {
          triggerProps,
          overlayProps,
          triggerOverlayProps,
          dialogProps,
          titleProps,
        },
        refs: {
          triggerRef,
          overlayRef,
        },
      }}
    >
      <article className={Styles.container()}>
        <div className={Styles.contents()}>{children}</div>
      </article>
    </SolutionsBlockContext.Provider>
  );
}

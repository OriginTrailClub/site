import { DialogAria } from '@react-aria/dialog';
import { OverlayAria, OverlayTriggerAria } from '@react-aria/overlays';
import { OverlayTriggerState } from '@react-stately/overlays';
import * as React from 'react';

interface SolutionsBlockContext<T> {
  refs: {
    triggerRef: React.MutableRefObject<HTMLButtonElement>;
    overlayRef: React.MutableRefObject<HTMLDivElement>;
  };
  props: {
    triggerProps: OverlayTriggerAria['triggerProps'];
    overlayProps: OverlayAria['overlayProps'];
    triggerOverlayProps: OverlayTriggerAria['overlayProps'];
    dialogProps: DialogAria['dialogProps'];
    titleProps: DialogAria['titleProps'];
  };
  state: OverlayTriggerState;
}

export const SolutionsBlockContext = React.createContext<
  SolutionsBlockContext<any>
>(null!);

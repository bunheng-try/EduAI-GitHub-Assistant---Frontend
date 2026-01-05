import React from 'react';
import {
  ResizableHandle,
  ResizablePanel as ShadcnResizablePanel,
  ResizablePanelGroup,
} from '../ui/resizable';

export interface ResizablePanelProps {
  children: React.ReactNode;
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  className?: string;
}

export interface ResizablePanelGroupProps {
  children: React.ReactNode;
  direction: 'horizontal' | 'vertical';
  className?: string;
}
export const ResizablePanel: React.FC<ResizablePanelProps> = ({
  children,
  defaultSize = 50,
  minSize = 20,
  maxSize = 80,
  className = '',
}) => {
  return (
    <ShadcnResizablePanel
      defaultSize={defaultSize}
      minSize={minSize}
      maxSize={maxSize}
      className={className}
    >
      {children}
    </ShadcnResizablePanel>
  );
};
export const ResizablePanelContainer: React.FC<ResizablePanelGroupProps> = ({
  children,
  direction,
  className = '',
}) => {
  return (
    <ResizablePanelGroup direction={direction} className={className}>
      {children}
    </ResizablePanelGroup>
  );
};
export const ResizablePanelDivider: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return <ResizableHandle className={className} />;
};
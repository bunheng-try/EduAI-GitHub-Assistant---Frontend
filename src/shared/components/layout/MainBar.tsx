import React from 'react';
import { Panel } from './Panel';
import { ScrollablePanel } from './ScrollablePanel';
export interface MainBarProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  listClassName?: string;
}
export const MainBar: React.FC<MainBarProps> = ({
  header,
  children,
  className = '',
  headerClassName = '',
  listClassName = '',
}) => {
  return (
    <Panel
      header={
        header ? (
          <div className={headerClassName}>
            {header}
          </div>
        ) : undefined
      }
      padding="p-0"
      className={`h-full ${className}`}
    >
      <ScrollablePanel height="100%" className={listClassName}>
        {children}
      </ScrollablePanel>
    </Panel>
  );
};
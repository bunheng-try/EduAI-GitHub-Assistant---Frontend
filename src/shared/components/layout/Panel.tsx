import React from 'react';

export interface PanelProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  padding?: string;
  className?: string;
}
export const Panel: React.FC<PanelProps> = ({
  children,
  header,
  padding = 'p-4',
  className = '',
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {header && (
        <div className="flex-shrink-0">
          {header}
        </div>
      )}
      <div className={`flex-1 ${padding}`}>
        {children}
      </div>
    </div>
  );
};
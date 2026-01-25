import React from 'react';

export interface ScrollablePanelProps {
  children: React.ReactNode;
  maxHeight?: string;
  height?: string;
  className?: string;
  scrollbarStyle?: 'default' | 'thin' | 'hidden';
}
export const ScrollablePanel: React.FC<ScrollablePanelProps> = ({
  children,
  maxHeight,
  height,
  className = '',
  scrollbarStyle = 'default',
}) => {
  const scrollbarClasses = {
    default: 'overflow-auto',
    thin: 'overflow-auto scrollbar-thin',
    hidden: 'overflow-auto scrollbar-hide',
  };

  const style: React.CSSProperties = {};
  if (maxHeight) style.maxHeight = maxHeight;
  if (height) style.height = height;

  return (
    <div
      className={`${scrollbarClasses[scrollbarStyle]} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
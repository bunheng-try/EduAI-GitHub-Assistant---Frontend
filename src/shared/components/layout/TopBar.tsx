import React from 'react';

type TopBarProps = {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
};

const TOPBAR_HEIGHT = 'h-14';

const TopBar: React.FC<TopBarProps> = ({ left, center, right }) => {
  return (
    <header
      className={`
        ${TOPBAR_HEIGHT}
        w-full
        flex
        items-center
        px-4
        border-b
        bg-white
        shrink-0
      `}
    >
      {/* Left */}
      <div className="flex items-center gap-2 min-w-0">
        {left}
      </div>

      {/* Center */}
      <div className="flex-1 flex justify-center px-4">
        {center}
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 justify-end min-w-0">
        {right}
      </div>
    </header>
  );
};

export default TopBar;

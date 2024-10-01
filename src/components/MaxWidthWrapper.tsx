import React from 'react';

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  maxWidth?: number;
  noPadding?: boolean;
  className?: string;
}

function MaxWidthWrapper({
  children,
  maxWidth = 1100,
  noPadding = false,
  className = '',
}: MaxWidthWrapperProps) {
  return (
    <div
      className={`relative w-full mr-auto ml-auto ${
        noPadding ? 'px-0' : 'px-8'
      } ${className}`}
      style={{ maxWidth: `${maxWidth}px` }}
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;

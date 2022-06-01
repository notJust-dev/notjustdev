import React from 'react';

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  maxWidth: number;
  px: number;
}

function MaxWidthWrapper({ children, maxWidth, px }: MaxWidthWrapperProps) {
  return (
    <div
      className={`relative w-full mr-auto ml-auto px-${px}`}
      style={{ maxWidth: `${maxWidth}px` }}
    >
      {children}
    </div>
  );
}

MaxWidthWrapper.defaultProps = {
  maxWidth: 1100,
  px: 8,
} as Partial<MaxWidthWrapperProps>;

export default MaxWidthWrapper;

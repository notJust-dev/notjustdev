import React from 'react';

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  maxWidth: number;
  noPadding: boolean;
}

function MaxWidthWrapper({
  children,
  maxWidth,
  noPadding,
}: MaxWidthWrapperProps) {
  return (
    <div
      className={`relative w-full mr-auto ml-auto ${
        noPadding ? 'px-0' : 'px-8'
      }`}
      style={{ maxWidth: `${maxWidth}px` }}
    >
      {children}
    </div>
  );
}

MaxWidthWrapper.defaultProps = {
  maxWidth: 1100,
  noPadding: false,
} as Partial<MaxWidthWrapperProps>;

export default MaxWidthWrapper;

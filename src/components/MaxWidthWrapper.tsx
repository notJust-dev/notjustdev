import React from 'react';

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  maxWidth: number;
}

function MaxWidthWrapper({ children, maxWidth }: MaxWidthWrapperProps) {
  return (
    <div
      className="relative w-full max-w-screen-lg mr-auto ml-auto px-8"
      style={{ maxWidth: `${maxWidth}px` }}
    >
      {children}
    </div>
  );
}

MaxWidthWrapper.defaultProps = {
  maxWidth: 1024,
} as Partial<MaxWidthWrapperProps>;

export default MaxWidthWrapper;

import React from 'react';

function MaxWidthWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full max-w-screen-lg mr-auto ml-auto px-8">
      {children}
    </div>
  );
}

export default MaxWidthWrapper;

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  maxWidth?: number;
  noPadding?: boolean;
  className?: string;
}

function MaxWidthWrapper({
  children,
  maxWidth = 1200,
  noPadding = false,
  className = '',
}: MaxWidthWrapperProps) {
  return (
    <div
      className={`flex w-full flex-col items-center ${
        noPadding ? 'px-0' : 'px-8'
      }`}
    >
      <div
        className={`relative w-full self-center ${className}`}
        style={{ maxWidth: `${maxWidth}px` }}
      >
        {children}
      </div>
    </div>
  );
}

export default MaxWidthWrapper;

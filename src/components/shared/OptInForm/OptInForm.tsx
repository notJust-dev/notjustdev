import React, { useRef, ReactNode } from 'react';
import useScript from '../../../hooks/useScript';

interface IOptInForm {
  formSrc: string;
  formId: string;
  title: string;
  children?: ReactNode;
}

function OptInForm({ formId, formSrc, title, children }: IOptInForm) {
  const scriptRef = useRef<HTMLDivElement | null>(null);

  useScript(formSrc, formId, { uid: formId }, scriptRef);

  return (
    <div className="bg-gray-900 shadow-lg p-3 md:p-5 my-2 max-w-5xl mr-auto ml-auto">
      <div className="mb-5 md:mx-3">
        <h2 className="text-2xl">{title}</h2>
        <p>{children}</p>
      </div>

      <div ref={scriptRef} />
    </div>
  );
}

export default OptInForm;

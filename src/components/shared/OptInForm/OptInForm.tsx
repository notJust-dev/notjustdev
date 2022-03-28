import React, { useRef, ReactNode } from 'react';
import MaxWidthWrapper from '../../MaxWidthWrapper';
import useScript from '../../../hooks/useScript';

interface IOptInForm {
  formSrc: string;
  formId: string;
  title: string;
  children?: ReactNode;
}

function OptInForm({ formId, formSrc, title, children }: IOptInForm) {
  const scriptRef = useRef<HTMLDivElement | null>(null);

  useScript(formSrc, scriptRef, { uid: formId });

  return (
    <MaxWidthWrapper>
      <div className="bg-gray-900 shadow-lg p-3 md:p-10 my-2">
        <div className="mb-5 md:mx-3">
          <h1>{title}</h1>
          <p>{children}</p>
        </div>

        <div ref={scriptRef} />
      </div>
    </MaxWidthWrapper>
  );
}

OptInForm.defaultProps = {
  children: null,
};

export default OptInForm;

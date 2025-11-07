'use client';

import { useRef, ReactNode, Suspense } from 'react';
import useScript from '../../../hooks/useScript';
import Form from '../../../app/(landings)/newsletter/form';

interface IOptInForm {
  formSrc: string;
  formId: string;
  title: string;
  formApiId: string;
  children?: ReactNode;
}

function OptInForm({
  formId,
  formSrc,
  title,
  formApiId,
  children,
}: IOptInForm) {
  const scriptRef = useRef<HTMLDivElement | null>(null);

  useScript(formSrc, formId, { uid: formId }, scriptRef);

  return (
    <div className="border border-white-100/25 rounded-xl shadow-lg p-3 md:p-5 my-2 max-w-5xl mr-auto ml-auto space-y-4">
      <div className="space-y-2">
        <h2 className="text-2xl font-medium">{title}</h2>
        <p>{children}</p>
      </div>

      <Suspense>
        <Form formId={formApiId} buttonText="Subscribe" className="w-full" />
      </Suspense>
      <div ref={scriptRef} />
    </div>
  );
}

export default OptInForm;

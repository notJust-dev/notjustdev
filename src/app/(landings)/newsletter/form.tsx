'use client';
import { useActionState } from 'react';
import submit from '@/components/KitForm/actions';
import { useFormStatus } from 'react-dom';
import { usePathname, useSearchParams } from 'next/navigation';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="button button-primary"
      aria-disabled={pending}
    >
      Subscribe
    </button>
  );
}

export default function Form({ formId }: { formId: string }) {
  const [state, action] = useActionState(submit, { success: false, error: '' });

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  const URL = `${origin}${pathname}?${searchParams.toString()}`;

  if (state.success) {
    return (
      <div className="bg-green-200 text-green-900 p-2 rounded-md font-medium space-y-1">
        <span className="font-space-grotesk text-lg font-bold">Success!</span>
        <p className="text-sm text-green-900">
          <b>Check your email for the link.</b> If you don&apos;t see it, check
          your spam folder.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col sm:flex-row gap-2">
      <input type="hidden" name="form_id" value={formId} />
      <input type="hidden" name="referrer" value={URL} />
      <input
        type="email"
        name="email_address"
        aria-label="Email address"
        required
        placeholder="Enter your email"
        className="w-full max-w-full sm:max-w-xs px-2 py-3 rounded-md bg-white-100 text-neutral-900"
      />
      <SubmitButton />
      {state.error && <p className="text-red-500 text-sm">{state.error}</p>}
    </form>
  );
}

import Image from 'next/image';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

export default function FormSuccess() {
  return (
    <MaxWidthWrapper maxWidth={800}>
      <section className="min-h-[80vh] flex items-center">
        <div className="bg-black p-10 rounded-xl w-full space-y-5">
          <Image
            src="/images/checkmark.png"
            width={96}
            height={96}
            alt=""
            className="pointer-events-none"
          />
          <h1>Thank you!</h1>
          <p className="my-2">
            The form was submitted successfully! You should receive a
            confirmation email soon
          </p>
          <p className="my-2 py-5 font-bold text-center bg-yellow-200 text-black p-2 rounded-md">
            ⭕️ Confirm your spot following the link in the email
          </p>

          <div>
            <p className="text-gray-400 text-center mt-5">
              Check spam and promotional folder. If you still didn&apos;t
              receive it, get in touch with us at <i>support@notjust.dev</i>
            </p>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}

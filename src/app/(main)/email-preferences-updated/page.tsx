import Image from 'next/image';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const FormSuccess = () => (
  <MaxWidthWrapper>
    <section className="p-5 self-stretch flex flex-col items-center min-h-[80vh] justify-center">
      <Image
        src="/images/checkmark.png"
        width={96}
        height={96}
        alt=""
        className="pointer-events-none"
      />
      <h1>Email preferences updated!</h1>
      <p className="my-1">We appreciate your digital personal space 🙌</p>
    </section>
  </MaxWidthWrapper>
);

export default FormSuccess;

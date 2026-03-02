import Image from 'next/image';
import styles from '../rnm.module.css';

type TestimonialImage = {
  src: string;
  alt: string;
};

export default function TestimonialsSection({
  images,
}: {
  images: TestimonialImage[];
}) {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsContainer}>
        {images.map((img) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={600}
            height={400}
            className={styles.testimonialImage}
          />
        ))}
      </div>
    </section>
  );
}

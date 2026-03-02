import Image from 'next/image';
import styles from '../rnm.module.css';
import { logoImages } from '../data/logos';

export default function LogoCarousel() {
  // Duplicate logos for seamless infinite scroll
  const allLogos = [...logoImages, ...logoImages];

  return (
    <section className={styles.logoSection}>
      <div className={styles.sectionTitleContainer}>
        <p className={styles.sectionTitle}>Top apps use React Native</p>
      </div>

      {/* Desktop: infinite scroll */}
      <div className={styles.infinityLogoWrapper}>
        <div className={styles.logoFadeLeft} />
        <div className={styles.logosContainer}>
          {allLogos.map((src, i) => (
            <div key={i} className={styles.logoItem}>
              <Image src={src} alt="" width={100} height={100} />
            </div>
          ))}
        </div>
        <div className={styles.logoFadeRight} />
      </div>

      {/* Mobile: static grid */}
      <div className={styles.mobileLogoGrid}>
        {logoImages.map((src, i) => (
          <div key={i} className={styles.mobileLogoItem}>
            <Image src={src} alt="" width={80} height={80} />
          </div>
        ))}
      </div>
    </section>
  );
}

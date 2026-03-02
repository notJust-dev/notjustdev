import Image from 'next/image';
import styles from '../rnm.module.css';
import SenjaWidget from './SenjaWidget';

export default function HeroSection() {
  return (
    <section className={styles.heroSection} id="Home">
      <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <p className="text-pill w-fit">
            The Ultimate React Native & Expo Course
          </p>
          <h1 className={styles.heroHeading}>React Native Mastery</h1>
          <p className={styles.heroSubtitle}>
            The only course you need to Master mobile development with React
            Native & Expo.
          </p>
          <div className={styles.heroCTA}>
            <a href="#Pricing" className={styles.gradientButton}>
              Enroll Now
            </a>
            <SenjaWidget widgetId="5012cf37-566b-4484-861f-b11738cec85b" />
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/react-native-mastery/hero.avif"
            alt="React Native Mastery"
            width={500}
            height={500}
            className={styles.heroImage}
            priority
          />
        </div>
      </div>

    </section>
  );
}

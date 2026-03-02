import Image from 'next/image';
import styles from '../rnm.module.css';


export default function FinalCTA() {
  return (
    <section className={styles.finalCTA}>
      <div className={styles.finalCTAInner}>
        <h2 className={styles.finalCTATitle}>
          Master app development with the best React Native and Expo course
        </h2>


        <a href="#Pricing" className={styles.gradientButton}>
          Enroll Now
        </a>
      </div>

      <Image
        src="/images/react-native-mastery/decorative/layer2.svg"
        alt=""
        width={400}
        height={400}
        className={styles.decorativeLayer}
        style={{ bottom: 0, left: 0, right: 0 }}
        aria-hidden
      />
    </section>
  );
}

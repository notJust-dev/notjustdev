import Image from 'next/image';
import styles from '../rnm.module.css';

const results = [
  'Feel confident in your React Native skills',
  'Build 7 fully functioning mobile apps for IOS & Android',
  'Prepare your portfolio with real-world apps',
];

export default function ResultsSection() {
  return (
    <section id="What-you-get" className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionTitleContainer}>
          <p className="text-pill w-fit">Results</p>
          <h2 className={styles.sectionTitle}>
            By the end of this course you will:
          </h2>
        </div>

        <div className={styles.resultsGrid}>
          {results.map((text) => (
            <div key={text} className={styles.resultCard}>
              <Image
                src="/images/react-native-mastery/decorative/checkmark.svg"
                alt=""
                width={32}
                height={32}
                aria-hidden
              />
              <p className={styles.resultCardText}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

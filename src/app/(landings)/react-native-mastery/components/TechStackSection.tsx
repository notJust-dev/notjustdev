import Image from 'next/image';
import styles from '../rnm.module.css';
import { techStackItems } from '../data/techStack';

export default function TechStackSection() {
  // Split into rows: 3, 2, 3
  const row1 = techStackItems.slice(0, 3);
  const row2 = techStackItems.slice(3, 5);
  const row3 = techStackItems.slice(5, 8);

  return (
    <section id="Stack" className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionTitleContainer}>
          <p className="text-pill w-fit">The Tech Stack</p>
          <h2 className={styles.sectionTitle}>
            Master the Tech Stack behind the top apps.
          </h2>
        </div>

        <div className={styles.stackGrid}>
          {[row1, row2, row3].map((row, ri) => (
            <div key={ri} className={styles.stackRow}>
              {row.map((item) => (
                <div key={item.name} className={styles.stackCard}>
                  <p className={styles.stackCardVersion}>{item.version}</p>
                  <p className={styles.stackCardName}>{item.name}</p>
                  <Image
                    src={item.icon}
                    alt=""
                    width={120}
                    height={120}
                    className={styles.stackCardIcon}
                    aria-hidden
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Image
        src="/images/react-native-mastery/decorative/layer1.svg"
        alt=""
        width={380}
        height={380}
        className={styles.decorativeLayer1}
        style={{ bottom: '33%', left: '35%' }}
        aria-hidden
      />
    </section>
  );
}

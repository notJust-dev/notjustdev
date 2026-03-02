import Image from 'next/image';
import styles from '../rnm.module.css';
import { capstoneProject } from '../data/projects';

export default function CapstoneProject() {
  return (
    <section className={styles.section}>
      <div className={styles.capstoneCard}>
        <div className={styles.capstoneImageContainer}>
          <Image
            src="/images/react-native-mastery/projects/social-media-app.avif"
            alt="Ultimate Social Media App"
            width={400}
            height={600}
            className={styles.capstoneImage}
          />
        </div>
        <div className={styles.capstoneContent}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h2 className={styles.capstoneTitle}>{capstoneProject.title}</h2>
            <p className={styles.capstoneDescription}>
              {capstoneProject.description}
            </p>
          </div>
          <div className={styles.capstoneFeatures}>
            {capstoneProject.features.map((feature) => (
              <div key={feature} className={styles.capstoneFeature}>
                <Image
                  src="/images/react-native-mastery/decorative/check.avif"
                  alt=""
                  width={40}
                  height={40}
                  aria-hidden
                />
                <p className={styles.capstoneFeatureText}>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

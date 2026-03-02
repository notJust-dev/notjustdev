import Image from 'next/image';
import styles from '../rnm.module.css';

export default function TutorSection() {
  return (
    <section id="tutor" className={styles.section}>
      <div className={styles.tutorInner}>
        <div className={styles.sectionTitleContainer}>
          <p className="text-pill w-fit">Meet your tutor</p>
          <h2 className={styles.tutorName}>Hi, I&apos;m Vadim</h2>
        </div>

        <div className={styles.tutorContent}>
          <div className={styles.tutorCard}>
            <Image
              src="/images/react-native-mastery/tutor-vadim.avif"
              alt="Vadim Savin"
              width={300}
              height={400}
              className={styles.tutorImage}
            />
            <p className={styles.tutorRole}>
              Developer, Educator, Founder of notJust.dev
            </p>
          </div>
          <div className={styles.tutorBio}>
            <p className={styles.tutorMission}>
              At notJust.dev, my mission is to help developers build impactful
              mobile apps.
            </p>
            <p className={styles.tutorText}>
              Our educational content has reached over{' '}
              <strong>10 million</strong> developers, giving them the tools and
              confidence to bring their app ideas to life.
            </p>
            <p className={styles.tutorText}>
              Before founding notJust.dev, I worked at a big tech company (
              <strong>FAANG</strong>), built a software development agency, and
              co-founded 2 startups. These experiences taught me a lot about
              coding and entrepreneurship.
            </p>
            <p className={styles.tutorText}>
              I have built over 100 apps with <strong>React Native</strong> and{' '}
              <strong>Expo</strong>, and I want to help you do the same.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

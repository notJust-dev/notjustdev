import styles from '../rnm.module.css';
import SenjaWidget from './SenjaWidget';
import ScrollReveal from './ScrollReveal';

export default function StudentReviews() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionTitleContainer}>
          <p className="text-pill w-fit">Our students</p>
          <h2 className={styles.sectionTitle}>What our students say</h2>
          <ScrollReveal>
            <p className={styles.studentReviewsSubtitle}>
              <strong>React Native Mastery</strong> was built with the help of
              50 early access students. Here&apos;s how the course helped them
              build real skills and achieve their goals.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <SenjaWidget
            widgetId="d3cdd442-dad3-4ae1-8ca0-87f3941d0364"
            lazyLoad
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

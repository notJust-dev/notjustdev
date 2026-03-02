import styles from '../rnm.module.css';
import { faqItems } from '../data/faq';
import Image from 'next/image';

function PlusIcon() {
  return (
    <svg
      className={styles.faqIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export default function FAQAccordion() {
  return (
    <section id="FAQ" className={styles.faqSection}>
      <Image
        src="/images/react-native-mastery/decorative/layer1.svg"
        alt=""
        width={380}
        height={380}
        className={styles.decorativeLayer2}
        style={{ top: 0, right: 0 }}
        aria-hidden
      />

      <div className={styles.faqGrid}>
        <div className={styles.faqContent}>
          <p className="text-pill w-fit">Answer to Questions</p>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        </div>

        <div className={styles.faqList}>
          {faqItems.map((item) => (
            <details key={item.question} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                {item.question}
                <PlusIcon />
              </summary>
              <div className={styles.faqAnswer}>
                {item.answer.split('\n\n').map((paragraph, i) => (
                  <p key={i} style={{ marginBottom: '12px' }}>
                    {paragraph.startsWith('- ') ? (
                      <ul style={{ paddingLeft: '20px', margin: 0 }}>
                        {paragraph.split('\n').map((line, j) => (
                          <li key={j}>{line.replace(/^- /, '')}</li>
                        ))}
                      </ul>
                    ) : paragraph.includes('support@notjust.dev') ? (
                      <>
                        Feel free to send us an email to:{' '}
                        <a href="mailto:support@notjust.dev?subject=RNM%20Question%3A%20">
                          support@notjust.dev
                        </a>
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

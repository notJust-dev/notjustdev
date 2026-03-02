'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../rnm.module.css';
import { curriculumTabs } from '../data/curriculum';

export default function CurriculumTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="Topics" className={styles.section}>
      <div className={styles.sectionInner} style={{ position: 'relative' }}>
        <Image
          src="/images/react-native-mastery/decorative/layer2.svg"
          alt=""
          width={400}
          height={400}
          className={styles.decorativeLayer}
          style={{ bottom: 0, left: 0 }}
          aria-hidden
        />

        <div className={styles.sectionTitleContainer}>
          <p className="text-pill w-fit">Topics</p>
          <h2 className={styles.sectionTitle}>
            Roadmap to React Native Mastery:
          </h2>
        </div>

        <div>
          <div className={styles.tabsMenu}>
            {curriculumTabs.map((tab, i) => (
              <button
                key={tab.name}
                type="button"
                className={
                  i === activeTab ? styles.tabLinkActive : styles.tabLink
                }
                onClick={() => setActiveTab(i)}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className={styles.tabContent}>
            <div className={styles.tabPane}>
              {curriculumTabs[activeTab].topics.map((topic) => (
                <div key={topic} className={styles.tabItem}>
                  <Image
                    src="/images/react-native-mastery/decorative/checkmark.svg"
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden
                  />
                  <p className={styles.tabItemText}>{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

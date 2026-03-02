import Image from 'next/image';
import styles from '../rnm.module.css';
import { projects } from '../data/projects';
import ScrollReveal from './ScrollReveal';

export default function ProjectsGrid() {
  return (
    <section id="Projects" className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionTitleContainer}>
          <p className="text-pill w-fit">Production-ready apps</p>
          <h2 className={styles.sectionTitle}>Project-Based Learning</h2>
          <ScrollReveal>
            <p className={styles.sectionSubtitle}>
              The best way to learn, is to get your hands dirty with the
              technology. During the course, you will build 7 production-ready
              apps that you can add to your portfolio.
            </p>
          </ScrollReveal>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 100}>
              <div className={styles.projectCard}>
                <div className={styles.projectCardImageContainer}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={400}
                    className={styles.projectCardImage}
                  />
                </div>
                <h3 className={styles.projectCardTitle}>{project.title}</h3>
                <p className={styles.projectCardDescription}>
                  {project.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Image
        src="/images/react-native-mastery/decorative/layer1.svg"
        alt=""
        width={380}
        height={380}
        className={styles.decorativeLayer2}
        style={{ top: 0, right: 0 }}
        aria-hidden
      />
    </section>
  );
}

'use client';
import styles from "../styles/Skills.module.css"
import SkillCard from "./SkillCard"
import skills from "../data/skils"

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.sectionHeader}>
        <p className={styles.kicker}>Technical Toolkit</p>
        <h2>Stack choices shaped by backend and platform work</h2>
        <p className={styles.sectionCopy}>
          A mix of systems programming, cloud infrastructure, identity,
          developer tooling, and frontend implementation used across personal and open source work.
        </p>
      </div>

      <div className={styles.skillsGrid}>
        {skills.map(skill => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            category={skill.category}
            description={skill.description}
            imageUrl={skill.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}

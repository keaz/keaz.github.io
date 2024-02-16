'use client';
import styles from "../styles/Skills.module.css"

export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Skills</h2>

        {/* Technical Skills */}
        <div className={styles.skillsBlock}>
          <h3 className={styles.subheading}>Technical Skills</h3>
          <ul className={styles.skillsList}>
            <li>Rust</li>
            <li>Java</li>
            <li>Spring</li>
            <li>Kafka</li>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className={styles.skillsBlock}>
          <h3 className={styles.subheading}>Soft Skills</h3>
          <ul className={styles.skillsList}>
            <li>Effective Communication</li>
            <li>Problem Solving</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Creativity</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

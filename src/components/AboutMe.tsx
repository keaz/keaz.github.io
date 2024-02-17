'use client';

import styles from "../styles/AboutMe.module.css"

export default function AboutMe() {
  return (
    <section id="about-section" className={styles.aboutMe}>
      <div className={styles.container}>
        <h2 className={styles.heading} >About Me</h2>
        <p className={styles.paragraph}>
          I&apos;m a passionate software developer with experience in building applications with Rust, Java, Spring, and more. I specialize in back-end development, and I&apos;m skilled in deploying scalable applications using Docker and Kubernetes. My journey in tech started with a fascination for solving complex problems and has grown into a career focused on developing robust, efficient software solutions.
        </p>
        <p className={styles.paragraph}>
          When I&apos;m not coding, I enjoy hiking, photography, and exploring new technologies. I&apos;m constantly learning and seeking out new challenges to improve my skills and contribute to the tech community.
        </p>
      </div>
    </section>
  );
}

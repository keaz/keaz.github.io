'use client';
import styles from "../styles/Projects.module.css";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.sectionHeader}>
        <p className={styles.kicker}>Open Source Work</p>
        <h2>Selected Projects</h2>
        <p className={styles.sectionCopy}>
          Recent public work across programming languages, decentralized identity,
          rollout infrastructure, developer tooling, and distributed systems.
        </p>
      </div>
      <div className={styles.projectsGrid}>
        {projects.map(project => (
          <article
            key={project.slug}
            className={`${styles.projectCard} ${project.featured ? styles.featuredCard : ''}`}
          >
            <img src={project.imageUrl} alt={`${project.title} cover artwork`} loading="lazy" />
            <div className={styles.cardBody}>
              <span className={styles.category}>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className={styles.techStack}>
                {project.techStack.map(stackItem => (
                  <li key={stackItem}>{stackItem}</li>
                ))}
              </ul>
            </div>
            <a
              className={styles.projectLink}
              href={project.detailPageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

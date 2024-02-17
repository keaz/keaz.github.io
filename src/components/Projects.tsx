'use client';
import styles from "../styles/Projects.module.css";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h2>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map(project => (
          <div key={project.id} className={styles.projectCard}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.detailPageUrl} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';
import styles from "../styles/Projects.module.css";
import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project: Project) => (
            <div key={project.id} className={styles.projectCard}>
              <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link to={`/projects/${project.slug}`}>Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

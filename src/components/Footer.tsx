'use client';
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {currentYear} Your Name. All rights reserved.</p>
        <p>
          Find me on:
          <a href="https://github.com/yourusername" className={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a> |
          <a href="https://linkedin.com/in/yourusername" className={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}

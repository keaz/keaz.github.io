'use client';
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const name = "Kasun Ranasinghe";

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerInner}>
        <div>
          <p className={styles.footerTitle}>{name}</p>
          <p className={styles.footerCopy}>
            Backend systems, distributed platforms, and developer tooling.
          </p>
        </div>
        <ul>
          <li><a href="https://github.com/keaz" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/kasun-ranasinghe" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://medium.com/@keazkasun" target="_blank" rel="noopener noreferrer">Medium</a></li>
        </ul>
      </div>
      <p className={styles.copyright}>&copy; {currentYear} {name}. All rights reserved.</p>
    </footer>
  );
}

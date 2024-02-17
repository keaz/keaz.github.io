'use client';
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Gets the current year
  const name = "Kasun Ranasinghe";

  return (
    <footer className={styles.siteFooter}>
      <p>&copy; {currentYear} {name}. All rights reserved.</p>
      <ul>
        <li><a href="https://github.com/keaz" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/kasun-ranasinghe" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://medium.com/@keazkasun" target="_blank" rel="noopener noreferrer">Medium</a></li>
      </ul>
    </footer>
  );
}

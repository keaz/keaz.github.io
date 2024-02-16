
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from "../styles/NavBar.module.css";

export default function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup the listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.solidBg : styles.transparentBg}`}>
      <ul className={styles.navList}>
        <li className={`${styles.navItem} ${isScrolled ? styles.scrolledNavItem : ''}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`${styles.navItem} ${isScrolled ? styles.scrolledNavItem : ''}`}>
          <Link to="/about">About</Link>
        </li>
        <li className={`${styles.navItem} ${isScrolled ? styles.scrolledNavItem : ''}`}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className={`${styles.navItem} ${isScrolled ? styles.scrolledNavItem : ''}`}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

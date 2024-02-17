
import { Link } from 'react-scroll';
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
    <nav id='nav-bar' className={`${styles.navbar} ${isScrolled ? styles.solidBg : styles.transparentBg}`}>
      <ul className={styles.navList}>
        <li className={`${styles.navItem} ${isScrolled ? styles.scrolledNavItem : ''}`}>
          <Link to="root" spy={true} smooth={true} offset={-70} duration={500} >Home</Link>
        </li>
        <li className={`${styles.navItem} ${isScrolled ? styles.scrolledNavItem : ''}`}>
          <Link to="about-section" spy={true} smooth={true} offset={-70} duration={500} > About </Link>
        </li>
        <li className={`${styles.navItem} ${isScrolled ? styles.scrolledNavItem : ''}`}>
          <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} > Skills </Link>
        </li>
        <li className={`${styles.navItem} ${isScrolled ? styles.scrolledNavItem : ''}`}>
          <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} > Portfolio </Link>
        </li>
        <li className={`${styles.navItem} ${isScrolled ? styles.scrolledNavItem : ''}`}>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} > Contact </Link>
        </li>
      </ul>
    </nav>
  );
}

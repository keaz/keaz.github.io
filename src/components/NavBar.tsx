import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import styles from "../styles/NavBar.module.css";

const sections = [
    { label: 'Home', to: 'root' },
    { label: 'About', to: 'about-section' },
    { label: 'Skills', to: 'skills' },
    { label: 'Work', to: 'portfolio' },
    { label: 'Contact', to: 'contact' }
];

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
            <div className={styles.navInner}>
                <Link
                    to="root"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={styles.brand}
                >
                    <span className={styles.brandMark}>KR</span>
                    <span className={styles.brandText}>Kasun Ranasinghe</span>
                </Link>

                <ul className={styles.navList}>
                    {sections.map(section => (
                        <li key={section.to} className={styles.navItem}>
                            <Link
                                to={section.to}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className={styles.navLink}
                                activeClass={styles.active}
                            >
                                {section.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={styles.navCta}
                >
                    Let&apos;s Talk
                </Link>
            </div>
        </nav>
    );
}

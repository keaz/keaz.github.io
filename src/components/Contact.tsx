'use client';

import styles from '../styles/Contact.module.css';

const contactLinks = [
  {
    title: 'LinkedIn',
    description: 'Best place for professional outreach and collaboration conversations.',
    href: 'https://www.linkedin.com/in/kasun-ranasinghe'
  },
  {
    title: 'GitHub',
    description: 'Explore repositories, code quality, and current open source work.',
    href: 'https://github.com/keaz'
  },
  {
    title: 'Medium',
    description: 'Read longer-form writing on engineering, systems, and tools.',
    href: 'https://medium.com/@keazkasun'
  }
];

export default function Contact() {
  return (
    <section id='contact' className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactIntro}>
          <p className={styles.kicker}>Get In Touch</p>
          <h2 className={styles.heading}>Open to backend, platform, and developer tooling conversations.</h2>
          <p className={styles.copy}>
            If you&apos;re building systems where reliability, architecture, and engineering judgment matter,
            I&apos;m interested in hearing about it.
          </p>
        </div>

        <div className={styles.contactLinks}>
          {contactLinks.map(link => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <span className={styles.contactLabel}>{link.title}</span>
              <p>{link.description}</p>
              <span className={styles.contactAction}>Open profile</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

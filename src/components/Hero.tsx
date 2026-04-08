'use client';

import { useState, useEffect } from 'react';
import styles from "../styles/Hero.module.css"
import projects from '../data/projects';
import skills from '../data/skils';
import crates from '../data/crates';

const rotatingRoles = [
  'Software Engineer',
  'Rust and Java Developer',
  'Distributed Systems Builder'
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingDelay = 100;
  const deletingDelay = 50;
  const pauseDelay = 2000;
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  const stats = [
    { value: `${projects.length}+`, label: 'public projects' },
    { value: `${crates.length}`, label: 'published crates' },
    { value: `${skills.length}+`, label: 'tools and platforms' }
  ];

  useEffect(() => {
    let timeoutId: number;

    if (!isDeleting && typedText.length === rotatingRoles[index].length) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % rotatingRoles.length);
    } else if (isDeleting) {
      timeoutId = setTimeout(() => {
        setTypedText(rotatingRoles[index].substring(0, typedText.length - 1));
      }, deletingDelay);
    } else {
      timeoutId = setTimeout(() => {
        setTypedText(rotatingRoles[index].substring(0, typedText.length + 1));
      }, typingDelay);
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, isDeleting, index]);

  return (
    <section id="root" className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true"></div>
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <span className={styles.kicker}>Portfolio • Backend Engineering • Developer Tooling</span>
          <h1 className={styles.title}>
            I build reliable backend systems and developer-facing products that hold up in production.
          </h1>
          <p className={styles.subtitle}>
            <span className={styles.roleLabel}>Currently focused on</span>
            <span className={styles.role}>{typedText}</span>
          </p>
          <p className={styles.description}>
            I&apos;m Kasun Ranasinghe, a software engineer working across Rust, Java,
            distributed systems, identity platforms, and platform tooling.
          </p>
          <div className={styles.ctaGroup}>
            <a href="#portfolio" className={styles.primaryCta}>View Selected Work</a>
            <a href="#contact" className={styles.secondaryCta}>Start a Conversation</a>
          </div>
          <div className={styles.profileLinks}>
            <a href="https://github.com/keaz" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/kasun-ranasinghe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://medium.com/@keazkasun" target="_blank" rel="noopener noreferrer">Medium</a>
          </div>
        </div>

        <aside className={styles.spotlightPanel}>
          <div className={styles.panelHeader}>
            <span className={styles.panelEyebrow}>Open Source Highlights</span>
            <h2>Recent work with real technical depth</h2>
          </div>

          <div className={styles.projectList}>
            {featuredProjects.map(project => (
              <article key={project.slug} className={styles.projectPreview}>
                <span className={styles.projectCategory}>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.statsGrid}>
            {stats.map(stat => (
              <div key={stat.label} className={styles.statCard}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

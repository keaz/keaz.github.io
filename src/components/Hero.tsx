'use client';

import { useState, useEffect } from 'react';
import "../styles/Hero.scss"
import styles from "../styles/Hero.module.css"

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const texts = ['Software Engineer', 'Rust, Java Developer', 'Microservice Enthusiast'];
  const typingDelay = 100;
  const deletingDelay = 50;
  const pauseDelay = 2000; // Pause before start deleting

  useEffect(() => {
    let timeoutId: number;

    if (!isDeleting && typedText.length === texts[index].length) {
      // Pause before deleting
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);
    } else if (isDeleting && typedText === '') {
      // Move to next text after deleting
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle through texts
    } else if (isDeleting) {
      // Delete text
      timeoutId = setTimeout(() => {
        setTypedText(texts[index].substring(0, typedText.length - 1));
      }, deletingDelay);
    } else {
      // Type text
      timeoutId = setTimeout(() => {
        setTypedText(texts[index].substring(0, typedText.length + 1));
      }, typingDelay);
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, isDeleting, index, texts]);

  return (
    <section className={styles.hero} >
      <div className={styles.heroBody}>
        <div className="container">
          <div id="stars" className="stars"></div>
          <div id="stars2" className="stars"></div>
          <div id="stars3" className="stars"></div>
          <h1 className={styles.title}>
            Hello, I&apos;m <span className={styles.highlight}>Kasun Ranasinghe</span>
          </h1>
          <p className={styles.subtitle}>{typedText}</p>
          <a href="#contact" className={styles.cta}>Get In Touch</a>
        </div>
      </div>

    </section>
  );

}

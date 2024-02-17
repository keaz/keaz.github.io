'use client';

import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <section id='contact' className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Get In Touch</h2>
        <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Name</label>
            <input type="text" id="name" name="name" required className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Email</label>
            <input type="email" id="email" name="email" required className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Message</label>
            <textarea id="message" name="message" rows={5} required className={styles.formTextarea}></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </section>
  );
}

import styles from '../styles/Crates.module.css'
import crates from '../data/crates';
import RustCrateCard from './RustCrateCard';

export default function RustCrates() {
  return (
    <section className={styles.rustCratesSection}>
      <div className={styles.sectionHeader}>
        <p className={styles.kicker}>Published Libraries</p>
        <h2>Rust crates with a tooling and backend focus</h2>
        <p className={styles.sectionCopy}>
          A small collection of crates built around authentication,
          Kafka ergonomics, duplicate detection, and practical utility work.
        </p>
      </div>
      <div className={styles.cratesContainer}>
        {crates.map(crate => (
          <RustCrateCard key={crate} crateId={crate} />
        ))}
      </div>
    </section>
  );
}

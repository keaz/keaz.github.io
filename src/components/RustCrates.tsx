import styles from '../styles/Crates.module.css'
import crates from '../data/crates';
import RustCrateCard from './RustCrateCard';

export default function RustCrates() {


  return (
    <div className={styles.rustCratesSection}>
      <h2>Rust Crates</h2>
      <div className={styles.cratesContainer}>
        {crates.map(crate => (
          <RustCrateCard crateId={crate} />
        ))}
      </div>
    </div>
  );


}

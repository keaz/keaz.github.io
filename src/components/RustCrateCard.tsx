import { useState, useEffect } from 'react';
import styles from '../styles/Crates.module.css'

interface Crate {
  id: string;
  name: string;
  downloads: number;
  homepage: string | null;
}

interface CratesApiResponse {
  crate: Crate;
}

export default function RustCrateCard({ crateId }: { crateId: string }) {
  const [crate, setCrates] = useState<Crate>();

  useEffect(() => {
    const fetchCrates = async () => {
      try {
        const response = await fetch(`https://crates.io/api/v1/crates/${crateId}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch crate metadata: ${response.status}`);
        }

        const data: CratesApiResponse = await response.json();
        setCrates(data.crate);
      } catch (error) {
        console.error('Error fetching Rust crates:', error);
      }
    };

    fetchCrates();
  }, [crateId]);

  if (!crate) {
    return (
      <article className={styles.crateCard}>
        <span className={styles.crateEyebrow}>Fetching crate</span>
        <h3>Loading...</h3>
        <p className={styles.crateDescription}>Pulling the latest metadata from crates.io.</p>
      </article>
    );
  }

  return (
    <article className={styles.crateCard}>
      <span className={styles.crateEyebrow}>Rust crate</span>
      <h3>{crate.name}</h3>
      <p className={styles.crateDescription}>
        Published package with {new Intl.NumberFormat().format(crate.downloads)} downloads.
      </p>
      <div className={styles.crateMeta}>
        <span className={styles.metricLabel}>Downloads</span>
        <strong>{new Intl.NumberFormat().format(crate.downloads)}</strong>
      </div>
      <div className={styles.crateLinks}>
        <a href={`https://crates.io/crates/${crateId}`} target="_blank" rel="noopener noreferrer">
          Crates.io
        </a>
        {crate.homepage && (
          <a href={crate.homepage} target="_blank" rel="noopener noreferrer">
            Homepage
          </a>
        )}
      </div>
    </article>
  );
}

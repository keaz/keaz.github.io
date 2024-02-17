import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Crates.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHome } from '@fortawesome/free-solid-svg-icons';

interface Crate {
  id: string;
  name: string;
  downloads: number;
  homepage: string | null; // Homepage might be null
}

export default function RustCrateCard({ crateId }: { crateId: string }) {
  const [crate, setCrates] = useState<Crate>();

  useEffect(() => {
    const fetchCrates = async () => {
      try {
        const response = await axios.get(`https://crates.io/api/v1/crates/${crateId}`)
        setCrates(response.data.crate);
      } catch (error) {
        console.error('Error fetching Rust crates:', error);
      }
    };

    fetchCrates();
  }, []);

  if (!crate) {
    return (<div>Loading...</div>);
  }

  return (
    <div className={styles.crateCard}>
      <h3>{crate.name}</h3>
      <div className={styles.crateInfo}>
        <a href={`https://crates.io/crates/${crateId}`} target="_blank" rel="noopener noreferrer" className={styles.homepage}>
          <FontAwesomeIcon icon={faHome} />
        </a>
        <span className="downloads">
          <FontAwesomeIcon icon={faDownload} /> {crate.downloads}
        </span>
      </div>
    </div>
  );
}

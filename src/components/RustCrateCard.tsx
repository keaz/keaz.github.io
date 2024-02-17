import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Crates.module.css'

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
    <div>
      <div key={crate.id} className={styles.crateCard}>
        <h3>{crate.name}</h3>
        <p>Downloads: {crate.downloads}</p>
        <p>Homepage: <a href={`https://crates.io/crates/${crateId}`} target="_blank" rel="noopener noreferrer">Link</a></p>
      </div>
    </div>
  );
}

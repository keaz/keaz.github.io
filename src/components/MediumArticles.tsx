import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/MediumArticles.module.css'

interface Article {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string; // Depending on the service's response structure
}

export default function MediumArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const mediumRssFeed = encodeURIComponent('https://medium.com/feed/@keazkasun');
  const rssToJsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${mediumRssFeed}`;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(rssToJsonUrl);
        setArticles(response.data.items); // Adjust based on actual response structure
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, [rssToJsonUrl]);

  const featuredArticles = articles.slice(0, 4);

  return (
    <section className={styles.articlesSection}>
      <div className={styles.sectionHeader}>
        <p className={styles.kicker}>Writing</p>
        <h2 className={styles.heading}>Latest articles and engineering notes</h2>
        <p className={styles.sectionCopy}>
          Notes on programming languages, distributed systems, backend development, and engineering practice.
        </p>
      </div>
      <div className={styles.articlesContainer}>
        {featuredArticles.map((article) => (
          <a key={article.link} href={article.link} className={styles.article} target="_blank" rel="noopener noreferrer">
            <span className={styles.articleLabel}>Medium article</span>
            <h3>{article.title}</h3>
            <p>{new Date(article.pubDate).toLocaleDateString()}</p>
          </a>
        ))}

        {featuredArticles.length === 0 && (
          <div className={styles.emptyState}>
            Loading the latest writing feed...
          </div>
        )}
      </div>
    </section>
  );
}

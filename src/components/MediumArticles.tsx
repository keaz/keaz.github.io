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
  }, []);

  return (
    <section className={styles.articlesSection}>
      <h2 className={styles.heading} >Latest Articles</h2>
      <div className={styles.articlesContainer}>
        {articles.map((article, index) => (
          <a key={index} href={article.link} className={styles.article} target="_blank" rel="noopener noreferrer">
            <h3>{article.title}</h3>
            <p>{new Date(article.pubDate).toLocaleDateString()}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

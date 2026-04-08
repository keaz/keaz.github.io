import styles from '../styles/SkillCard.module.css'

interface SkillCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export default function SkillCard({ title, category, description, imageUrl }: SkillCardProps) {
  return (
    <article className={styles.skillCard}>
      <div className={styles.iconWrap}>
        <img src={imageUrl} alt={title} />
      </div>
      <span className={styles.skillCategory}>{category}</span>
      <h3 className={styles.skillTitle}>{title}</h3>
      <p className={styles.skillDescription}>{description}</p>
    </article>
  );
}

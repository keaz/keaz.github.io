'use client';
import styles from "../styles/Skills.module.css"
import SkillCard from "./SkillCard"
import skills from "../data/skils"

export default function Skills() {
  return (
    <div className={styles.skillsSection}>
      {skills.map(skill => (
        <SkillCard key={skill.title} title={skill.title} imageUrl={skill.imageUrl} />
      ))}
    </div>
  );
}

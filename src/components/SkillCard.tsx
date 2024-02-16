import React, { useState } from 'react';
import styles from '../styles/SkillCard.module.css'

interface SkillCardProps {
  title: string;
  imageUrl: string;
}

export default function SkillCard({ title, imageUrl }: SkillCardProps) {
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const percentX = (e.clientX - centerX) / (width / 2);
    const percentY = (e.clientY - centerY) / (height / 2);
    const tiltMaxAngle = 4; // Max tilt angle in degrees

    setStyle({
      transform: `rotateY(${percentX * tiltMaxAngle}deg) rotateX(${percentY * -tiltMaxAngle}deg)`,
      transition: 'transform 0.1s',
    });
  };

  const resetTilt = () => {
    setStyle({
      transform: 'rotateY(0deg) rotateX(0deg)',
      transition: 'transform 0.5s',
    });
  };

  return (
    <div className={styles.skillCard}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setStyle({ transition: 'none' })} // Remove transition for instant effect on enter
      onMouseLeave={resetTilt}>
      <img src={imageUrl} alt={title} />
      <div className={styles.skillTitle}>{title}</div>
    </div>
  );
}

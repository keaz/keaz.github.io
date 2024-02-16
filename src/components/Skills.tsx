'use client';
import styles from "../styles/Skills.module.css"
import SkillCard from "./SkillCard"

const skills = [
  {
    title: 'Rust',
    description: 'Blazingly fast and memory-efficient prgramming language',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-original.svg'
  },
  {
    title: 'Actix-web',
    description: 'Balingly fast web framework for Rust',
    imageUrl: 'https://avatars.githubusercontent.com/u/32776943?s=200&v=4'
  },
  {
    title: 'Tokio',
    description: 'A runtime for writing reliable asynchronous applications with Rust',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Tokio_logo.svg/533px-Tokio_logo.svg.png'
  },
  {
    title: 'Java',
    description: 'Best programming language for enterprise applications',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'
  },
  {
    title: 'Spring Boot',
    description: 'Enterprise grade framework for Java',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg'
  },
  {
    title: 'MySQL',
    description: 'The world\'s most popular open source database',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg'
  },
  {
    title: 'OpenDJ',
    description: 'Open source LDAP directory services',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/OpenDJ_Logo.svg/605px-OpenDJ_Logo.svg.png'
  },
  {
    title: 'Kafka',
    description: 'Distributed streaming platform',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apachekafka/apachekafka-original.svg'
  },
  {
    title: 'AWS',
    description: 'Amazon Web Services',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
  },
  {
    title: 'React',
    description: 'Frontend library for building user interfaces',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
  },
  {
    title: 'NeoVim',
    description: 'Best IDE for developers',
    imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/neovim/neovim-original.svg'
  },
];

export default function Skills() {
  return (
    <div className={styles.skillsSection}>
      {skills.map(skill => (
        <SkillCard key={skill.title} title={skill.title} imageUrl={skill.imageUrl} />
      ))}
    </div>
  );
}

'use client';

import styles from "../styles/AboutMe.module.css"

export default function AboutMe() {
  return (
    <section id="about-section" className={styles.aboutMe}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Backend Engineering • Distributed Systems • Developer Tooling</p>
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.lead}>
          I&apos;m a software engineer focused on building reliable back-end systems,
          developer tooling, and infrastructure-heavy products with Rust, Java, and
          cloud-native platforms.
        </p>
        <p className={styles.paragraph}>
          My recent work has been centered around projects such as AICore, an
          agent-native programming language, Digital Trust Graph DID for decentralized
          identity flows, and FluxGate for feature management and rollout safety. I
          enjoy working close to protocols, platform boundaries, system design, and
          the operational details that make software dependable in production.
        </p>
        <p className={styles.callout}>
          I see AI systems and agentic tooling as tools for engineers, not replacements for
          engineering. In practice they sit in the same toolbox as compilers,
          debuggers, CI, tests, and observability: useful for speeding up repetitive
          work, exploring solution space faster, and improving productivity, while
          judgment, tradeoff analysis, and ownership still stay with the engineer.
        </p>
        <p className={styles.paragraph}>
          Outside of coding I like writing, photography, movies, and learning more
          about physics and how systems behave, whether that system is software,
          infrastructure, or the universe itself.
        </p>
      </div>
    </section>
  );
}

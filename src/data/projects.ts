const projects: Project[] = [
  {
    id: 1,
    slug: 'aicore',
    title: 'AICore',
    description:
      'An agent-native, IR-first programming language built for human and AI collaboration, with deterministic tooling, structured diagnostics, contracts, and an LLVM backend.',
    imageUrl: 'aicore.svg',
    detailPageUrl: 'https://github.com/keaz/aicore',
    category: 'Programming Language',
    techStack: ['Rust', 'LLVM', 'Effects', 'Contracts'],
    featured: true
  },
  {
    id: 2,
    slug: 'digital-trust-graph-did',
    title: 'Digital Trust Graph DID',
    description:
      'A Rust-first decentralized identity platform for the did:dtg method, covering wallet-signed DID lifecycle flows, OIDC/OIDC4 bridges, VC services, and Polkadot-SDK integration.',
    imageUrl: 'digital-trust-graph.svg',
    detailPageUrl: 'https://github.com/keaz/digital-trust-graph-did',
    category: 'Decentralized Identity',
    techStack: ['Rust', 'OIDC4', 'VCs', 'Polkadot'],
    featured: true
  },
  {
    id: 3,
    slug: 'fluxgate-backend',
    title: 'FluxGate Backend',
    description:
      'A feature flag management platform with a Rust control plane, low-latency edge evaluation, rollout safety checks, approvals, canary governance, and experiment metrics.',
    imageUrl: 'fluxgate.svg',
    detailPageUrl: 'https://github.com/keaz/feature-toggle',
    category: 'Feature Management',
    techStack: ['Rust', 'Actix', 'gRPC', 'PostgreSQL'],
    featured: true
  },
  {
    id: 4,
    slug: 'kcli',
    title: 'KCLI',
    description:
      'A CLI tool for inspecting Kafka clusters and speeding up day-to-day platform debugging and operations work.',
    imageUrl: 'kafka.webp',
    detailPageUrl: 'https://github.com/keaz/kcli',
    category: 'Developer Tooling',
    techStack: ['Rust', 'Kafka', 'CLI']
  },
  {
    id: 5,
    slug: 'keycloak-home-idp-discovery',
    title: 'Keycloak Home IdP Discovery',
    description:
      'A Java extension for Keycloak that routes users to the correct home identity provider or realm using their email domain.',
    imageUrl: 'jwt.webp',
    detailPageUrl: 'https://github.com/keaz/keycloak-home-idp-discovery',
    category: 'Identity & Access',
    techStack: ['Java', 'Keycloak', 'SSO']
  },
  {
    id: 6,
    slug: 'rendezvous-server',
    title: 'Rendezvous Server',
    description:
      'A Rust rendezvous server built to coordinate peer discovery and connectivity for decentralized file-sharing workflows.',
    imageUrl: 'rendezvous_server.webp',
    detailPageUrl: 'https://github.com/keaz/rendezvous-server',
    category: 'Distributed Systems',
    techStack: ['Rust', 'Networking', 'P2P']
  },
  {
    id: 7,
    slug: 'decentralized-peer',
    title: 'Decentralized Peer',
    description:
      'A peer-to-peer file-sharing project focused on decentralized connectivity, file transfer, and practical systems programming.',
    imageUrl: 'rust-decentralized-peer.webp',
    detailPageUrl: 'https://github.com/keaz/decentralized-peer',
    category: 'Peer-to-Peer',
    techStack: ['Rust', 'Files', 'P2P']
  },
  {
    id: 8,
    slug: 'rust-copy',
    title: 'Rust Copy',
    description:
      'A Rust implementation of a cp-style file copy tool, built as a focused exercise in systems tooling and filesystem work.',
    imageUrl: 'cp.webp',
    detailPageUrl: 'https://github.com/keaz/rust-copy',
    category: 'CLI Utility',
    techStack: ['Rust', 'CLI', 'Filesystem']
  }
];

export default projects;

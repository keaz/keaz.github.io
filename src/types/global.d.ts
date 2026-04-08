export {};

declare global {
  type Project = {
    id: number;
    slug: string;
    title: string;
    description: string;
    imageUrl: string;
    detailPageUrl: string;
    category: string;
    techStack: string[];
    featured?: boolean;
  };

  type Skill = {
    title: string;
    category: string;
    description: string;
    imageUrl: string;
  };
}

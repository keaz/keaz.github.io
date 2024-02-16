//'use client';

import projects from "../../data/projects";
import Project from "../../components/Project";


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = [
    { slug: 'project-one' },
  ];

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project: Project | undefined = projects.find((project: Project) => project.slug === params.slug); // Find the project that matches the slug

  return (
    <div>
      <Project project={project} />
    </div>
  );
}

'use client';

export default function ProjectPage({ project }: { project: Project | undefined }) {

  if (project == undefined) {
    return <h1>Project Not Found</h1>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
      {/* Render more project details here */}
    </div>
  );
}


import { projects } from "@/data";
import { SectionHeader } from "./SectionHeader";
import type { ProjectLink } from "@/types";

function ProjectAction({ link }: { link: ProjectLink }): React.JSX.Element {
  if (link.type === "live") {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className="project-link is-live"
      >
        {link.label ?? "View Project"} <i className="fas fa-arrow-right" />
      </a>
    );
  }

  return (
    <span className="project-link is-locked">
      <i className="fas fa-lock" /> {link.label}
    </span>
  );
}

export function Projects(): React.JSX.Element {
  return (
    <section className="projects" id="projects">
      <SectionHeader
        tag="Portfolio"
        title="Featured Projects"
        description="A showcase of my recent work and contributions to various domains"
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card reveal" key={project.index}>
            <div className="project-image">
              <span className="project-number">{project.index}</span>
            </div>
            <div className="project-content">
              <div className="project-tag">{project.tag}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ProjectAction link={project.link} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

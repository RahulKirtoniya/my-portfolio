import { experience } from "@/data";
import { SectionHeader } from "./SectionHeader";

export function Experience(): React.JSX.Element {
  return (
    <section className="experience" id="experience">
      <SectionHeader
        tag="Career Journey"
        title="Work Experience"
        description="Professional experience in full-stack development, system architecture, and technology leadership"
      />

      <div className="experience-timeline">
        {experience.map((job) => {
          const locationText = job.workMode
            ? `${job.location} · ${job.workMode}`
            : job.location;

          return (
            <article
              className="experience-card reveal"
              key={`${job.company}-${job.role}`}
            >
              <div className="exp-icon">
                <i className={job.icon} />
              </div>
              <div className="exp-content">
                <div className="exp-header">
                  <div>
                    <h3>{job.role}</h3>
                    <h4>{job.company}</h4>
                    <p className="exp-location">
                      <i className={job.locationIcon} />
                      {locationText}
                    </p>
                  </div>
                  <div className="exp-year">{job.period}</div>
                </div>
                <ul className="exp-achievements">
                  {job.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

import { education } from "@/data";
import { SectionHeader } from "./SectionHeader";

export function Education(): React.JSX.Element {
  return (
    <section className="education" id="education">
      <SectionHeader
        tag="Academic Background"
        title="Education"
        description="Strong academic foundation in computer science and engineering"
      />

      <div className="education-timeline">
        {education.map((edu) => (
          <article className="education-card reveal" key={edu.degree}>
            <div className="edu-icon">
              <i className={edu.icon} />
            </div>
            <div className="edu-content">
              <div className="edu-year">{edu.period}</div>
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p className="edu-location">{edu.location}</p>
              <p className="edu-gpa">{edu.gpa}</p>
              <div className="edu-courses">
                {edu.courses.map((course) => (
                  <span className="course-tag" key={course}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

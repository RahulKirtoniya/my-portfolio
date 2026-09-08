import { skills } from "@/data";
import { SectionHeader } from "./SectionHeader";

export function Skills(): React.JSX.Element {
  return (
    <section className="skills" id="skills">
      <SectionHeader
        tag="Expertise"
        title="Technical Skills"
        description="A comprehensive set of modern technologies and tools that I use to build exceptional digital experiences"
      />

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card reveal" key={skill.name}>
            <i
              className={`${skill.icon} skill-icon`}
              style={{ color: skill.color }}
            />
            <h4>{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

import { certifications, leetcode } from "@/data";
import { SectionHeader } from "./SectionHeader";

const difficultyClass: Record<string, string> = {
  easy: "difficulty-easy",
  medium: "difficulty-medium",
  hard: "difficulty-hard",
};

export function Certifications(): React.JSX.Element {
  return (
    <section className="certifications" id="certifications">
      <SectionHeader
        tag="Achievements"
        title="Certifications & Coding Profile"
      />

      <div className="cert-container">
        <div className="leetcode-profile reveal">
          <div className="leetcode-header">
            <i className="fas fa-code" />
            <h3>LeetCode Profile</h3>
          </div>
          <div className="leetcode-content">
            <div className="leetcode-stats">
              {leetcode.stats.map((stat) => {
                const variantClass = stat.variant
                  ? ` ${difficultyClass[stat.variant]}`
                  : "";
                return (
                  <div className="stat-card" key={stat.label}>
                    <div className={`stat-icon${variantClass}`}>
                      <i className={stat.icon} />
                    </div>
                    <div className="stat-info">
                      <h4>{stat.label}</h4>
                      <p
                        className="stat-number"
                        style={
                          stat.valueColor
                            ? { color: stat.valueColor }
                            : undefined
                        }
                      >
                        {stat.value}
                        {stat.suffix ? (
                          <span className="stat-suffix">{stat.suffix}</span>
                        ) : null}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              href={leetcode.href}
              target="_blank"
              rel="noreferrer"
              className="leetcode-link"
            >
              <i className="fas fa-external-link-alt" /> View Full Profile
            </a>
          </div>
        </div>

        <div className="cert-grid-full">
          {certifications.map((cert, i) => (
            <article className="cert-item-full reveal" key={`${cert.title}-${i}`}>
              <div className="cert-icon-wrapper">
                <i className={cert.icon} />
              </div>
              <div className="cert-details">
                <h4>{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                {cert.credentialId ? (
                  <p className="cert-id">Credential ID: {cert.credentialId}</p>
                ) : null}
                {cert.skills ? (
                  <div className="cert-skills">
                    {cert.skills.map((skill) => (
                      <span className="skill-badge" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

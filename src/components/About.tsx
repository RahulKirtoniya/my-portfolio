import { profile, codeWindowLines } from "@/data";
import { SectionHeader } from "./SectionHeader";
import type { CodeToken } from "@/types";

const tokenClass: Record<CodeToken["kind"], string | undefined> = {
  keyword: "code-keyword",
  class: "code-class",
  string: "code-string",
  property: "code-property",
  value: "code-value",
  comment: "code-comment",
  plain: undefined,
};

export function About(): React.JSX.Element {
  return (
    <section className="about" id="about">
      <SectionHeader
        tag="Introduction"
        title="About Me"
        description="A passionate developer dedicated to creating innovative solutions and delivering exceptional user experiences"
      />

      <div className="about-grid">
        <div className="about-text">
          {profile.aboutParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <div className="info-cards">
            {profile.infoCards.map((card) => (
              <div className="info-card reveal" key={card.label}>
                <i className={card.icon} />
                <h4>{card.label}</h4>
                <span>{card.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-visual">
          <div className="code-window">
            <div className="code-header">
              <div className="code-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="code-title">developer.js</div>
            </div>
            <div className="code-body">
              {codeWindowLines.map((line, li) => (
                <div
                  className="code-line"
                  key={li}
                  style={{ animationDelay: `${0.1 * (li + 1)}s` }}
                >
                  {line.map((token, ti) => {
                    const cls = tokenClass[token.kind];
                    return cls ? (
                      <span className={cls} key={ti}>
                        {token.text}
                      </span>
                    ) : (
                      <span key={ti}>{token.text}</span>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

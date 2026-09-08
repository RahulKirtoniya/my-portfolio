interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
}

/** The centered eyebrow + title + optional description used atop each section. */
export function SectionHeader({
  tag,
  title,
  description,
}: SectionHeaderProps): React.JSX.Element {
  return (
    <div className="section-header">
      <div className="section-tag">{tag}</div>
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="section-description">{description}</p>
      ) : null}
    </div>
  );
}

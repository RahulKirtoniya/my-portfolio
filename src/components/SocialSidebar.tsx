import { socials } from "@/data";

export function SocialSidebar(): React.JSX.Element {
  const sidebarLinks = socials.filter((s) => s.inSidebar);

  return (
    <div className="social-sidebar">
      {sidebarLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          title={link.label}
          aria-label={link.label}
        >
          <i className={link.icon} />
        </a>
      ))}
    </div>
  );
}

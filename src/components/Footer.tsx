import { socials } from "@/data";

const year = new Date().getFullYear();

export function Footer(): React.JSX.Element {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <div className="footer-logo-icon">
            <i className="fas fa-code" />
          </div>
        </div>
        <div className="footer-socials">
          {socials.map((link) => (
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
      </div>
      <div className="footer-copyright">
        Made with <span>❤</span> by Rahul Kirtoniya • © {year} All Rights
        Reserved
      </div>
    </footer>
  );
}

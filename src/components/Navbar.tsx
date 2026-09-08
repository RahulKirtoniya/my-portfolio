import { useState } from "react";
import { navItems } from "@/data";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export function Navbar(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  const close = (): void => setOpen(false);

  return (
    <nav>
      <a href="#home" className="logo" onClick={close} aria-label="Home">
        <div className="logo-icon">
          <i className="fas fa-code" />
        </div>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links${open ? " active" : ""}`}>
        {navItems.map((item) => {
          const id = item.href.replace("#", "");
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeId === id ? "active" : undefined}
                onClick={close}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

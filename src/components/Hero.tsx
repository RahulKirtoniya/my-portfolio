import { profile } from "@/data";

export function Hero(): React.JSX.Element {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="status-badge">{profile.availability}</div>
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p className="hero-description">{profile.heroDescription}</p>
        <div className="hero-buttons">
          <a href={profile.cvHref} download className="btn btn-primary">
            <i className="fas fa-download" /> Download CV
          </a>
          <a href="#contact" className="btn btn-outline">
            <i className="fas fa-paper-plane" /> Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

import { services } from "@/data";
import { SectionHeader } from "./SectionHeader";

export function Services(): React.JSX.Element {
  return (
    <section className="services" id="services">
      <SectionHeader
        tag="What I Offer"
        title="Services"
        description="Comprehensive software development services tailored to your business needs"
      />

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card reveal" key={service.title}>
            <div className="service-icon">
              <i className={service.icon} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

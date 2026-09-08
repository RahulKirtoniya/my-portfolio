import { useState } from "react";
import { profile } from "@/data";
import { SectionHeader } from "./SectionHeader";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const emptyForm: FormState = { name: "", email: "", message: "" };

export function Contact(): React.JSX.Element {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [sent, setSent] = useState(false);

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => {
      setSent(false);
      setForm(emptyForm);
    }, 3000);
  };

  return (
    <section className="contact" id="contact">
      <SectionHeader
        tag="Get In Touch"
        title="Let's Connect"
        description="Have a project in mind? Let's discuss how I can help bring your vision to life. Or if you have a business problem that needs a tech solution, let's discuss it together — I'll help you find the best possible systematic solutions. You can directly reach out to me via WhatsApp, LinkedIn, or email."
      />

      <div className="contact-container">
        <div className="contact-info">
          <h3>Start a Conversation</h3>
          <p>
            I'm always open to discussing new opportunities, creative ideas, or
            ways to help bring your vision to life. Whether you need a full-stack
            developer, system architect, or technical consultant, I'm here to
            help.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <i className="fas fa-envelope" />
              <span>{profile.email}</span>
            </a>
            <a
              href={profile.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <i className="fab fa-whatsapp" />
              <span>{profile.whatsapp}</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rahulkirtoniya/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <i className="fab fa-linkedin-in" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com/RahulKirtoniya"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <i className="fab fa-github" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                value={form.name}
                onChange={update("name")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                value={form.email}
                onChange={update("email")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={update("message")}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: "100%",
                background: sent
                  ? "linear-gradient(135deg, #22c55e, #3b82f6)"
                  : undefined,
              }}
            >
              {sent ? (
                <>
                  <i className="fas fa-check" /> Message Sent!
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

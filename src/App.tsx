import {
  Navbar,
  SocialSidebar,
  Hero,
  About,
  Education,
  Experience,
  Skills,
  Projects,
  Certifications,
  Services,
  Contact,
  Footer,
} from "@/components";
import { useReveal } from "@/hooks/useReveal";

export default function App(): React.JSX.Element {
  useReveal();

  return (
    <>
      <Navbar />
      <SocialSidebar />

      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Certifications />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

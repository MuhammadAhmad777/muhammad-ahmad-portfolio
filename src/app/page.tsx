import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CVProjects from "@/components/CVProjects";
import Research from "@/components/Research";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Skills />
        <Projects />
        <CVProjects />
        <Research />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

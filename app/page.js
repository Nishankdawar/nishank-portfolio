import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Pipeline from "@/components/Pipeline";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Terminal from "@/components/Terminal";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Pipeline />
      <Experience />
      <Projects />
      <Skills />
      <Terminal />
      <Contact />
    </main>
  );
}

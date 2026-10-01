import Background from "@/components/Background";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Background />

      <div className="page-content">
        <NavBar />
        <Hero />
        <div className="middle-shell">
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />

          <footer>
          <p color="">© 2026 Affan. All rights reserved.</p>
          
          </footer>
        </div>
      </div>
    </main>
  );
}



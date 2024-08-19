import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Responsibilities from "./components/Responsibilities";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div>
      <Header />
      <About id="about" />
      <Languages id="languages" />
      <Experience id="experience" />
      <Skills id="skills" />
      <Achievements id="achievements" />
      <Projects id="projects" />
      <Responsibilities id="responsibilities" />
      <Contact id="contact" />
    </div>
  );
}

export function Button({ children }) {
  return <button id="btn">{children}</button>;
}

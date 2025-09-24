import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <nav className="flex justify-between items-center px-8 py-6">
        <span className="text-1xl font-bold text-emerald-400">
          Adriano Rocha &lt;/&gt;
        </span>

        <div className="hidden md:flex space-x-8 mx-end">
          <a href="#home" className="hover:text-emerald-400">
            Home
          </a>
          <a href="#about" className="hover:text-emerald-400">
            About
          </a>
          <a href="#skills" className="hover:text-emerald-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-emerald-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-emerald-400">
            Contact
          </a>
        </div>
      </nav>
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

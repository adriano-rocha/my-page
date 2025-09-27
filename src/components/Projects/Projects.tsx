import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaLaptopCode,
  FaDatabase, 
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiPostgresql, SiExpress } from "react-icons/si"; 

function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  const projects = [
    {
      id: 1, 
      title: "Quiroclínica (Site Institucional)",
      description:
        "Site institucional de **alta conversão** com design profissional e responsivo, focado em credibilidade e geração de agendamentos. Inclui sistema de **internacionalização (i18n)** para múltiplos idiomas.", 
      image: "/images/quiroclinica-preview.png",
      demoUrl: "https://site-quiroclinica.vercel.app/",
      githubUrl: "https://github.com/adriano-rocha/site-quiroclinica",
      technologies: ["React", "CSS", "i18n", "Responsive"], 
      status: "Finalizado",
      color: "white", 
    },
    {
      id: 2, 
      title: "CRUD Fullstack (Gestão de Dados)",
      description:
        "Solução completa de gestão de dados com API e interface integradas. Demonstração de arquitetura **Node.js/Express** e persistência em **MongoDB**.", 
      image: "/images/crud-preview.png",
      demoUrl: "https://crud-fullstack-ivory.vercel.app",
      githubUrl: "https://github.com/adriano-rocha/crud-fullstack",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Responsive"],
      status: "Finalizado",
      color: "yellow", 
    },
    {
      id: 3, 
      title: "Dev Store (E-commerce Moderno)",
      description:
        "E-commerce moderno para demonstração de arquitetura escalável com **Next.js/TypeScript**, gerenciamento de estado e carrinho de compras.", 
      image: "/images/dev-store.png",
      demoUrl: "https://dev-store-link.vercel.app/", 
      githubUrl: "https://github.com/adriano-rocha/dev-store",
      technologies: ["Next.js", "React", "TypeScript", "Responsive"],
      status: "Em desenvolvimento",
      color: "blue", 
    },
    {
      id: 4,
      title: "Controle de Gastos",
      description:
        "Aplicação para controle financeiro pessoal com dashboard interativo em React, focada em usabilidade e design limpo.", 
      image: "/images/expense-preview.png",
      demoUrl: "https://expense-control-five.vercel.app",
      githubUrl: "https://github.com/adriano-rocha/expense-control",
      technologies: ["React", "JavaScript", "Responsive"],
      status: "Finalizado",
      color: "blue", 
    },
    {
      id: 5, 
      title: "New Gym",
      description:
        "Site moderno para academia com design responsivo e animações, usando JavaScript vanilla para um código leve.",
      image: "/images/newgym-preview.png",
      demoUrl: "https://new-gym-three.vercel.app/",
      githubUrl: "https://github.com/adriano-rocha/new-gym",
      technologies: ["React", "CSS", "Responsive"],
      status: "Em desenvolvimento",
      color: "green", 
    },
    {
      id: 6,
      title: "TaskFlow - Landing Page",
      description:
        "Landing page interativa para app de produtividade. Foco em UX/UI, alta performance e responsividade em todos os dispositivos.", 
      image: "/images/taskflow-preview.png",
      demoUrl: "https://interactive-page-brown.vercel.app/",
      githubUrl: "https://github.com/adriano-rocha/interactive-page",
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "Finalizado",
      color: "yellow", 
    },
    {
      id: 7,
      title: "Auto Brilho",
      description:
        "Site em React/Vite para loja de higienização automotiva. Em desenvolvimento, focado em velocidade de carregamento e SEO.",
      image: "/images/autobrilho-preview.png",
      demoUrl: null,
      githubUrl: "https://github.com/adriano-rocha/site-auto-brilho",
      technologies: ["React", "Vite", "Responsive"],
      status: "Em desenvolvimento",
      color: "red", 
    },
    {
      id: 8, 
      title: "To-Do List App",
      description:
        "Aplicação de lista de tarefas em React. Demonstração de gerenciamento de estado e persistência de dados local.",
      image: "/images/todo-preview.png",
      demoUrl: "https://to-do-ochre-xi.vercel.app",
      githubUrl: "https://github.com/adriano-rocha/to-do",
      technologies: ["React", "JavaScript", "CSS"],
      status: "Finalizado",
      color: "white", 
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "Finalizado" ? "text-emerald-400" : "text-orange-400";
  };

  const getTechIcon = (tech: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      React: <FaReact className="text-blue-400" />,
      "Node.js": <FaNodeJs className="text-emerald-400" />,
      Express: <SiExpress className="text-emerald-500" />, 
      MongoDB: <SiMongodb className="text-green-500" />, 
      PostgreSQL: <SiPostgresql className="text-blue-600" />, 
      JavaScript: <FaJs className="text-yellow-400" />,
      "Next.js": <SiNextdotjs className="text-white" />,
      TypeScript: <span className="text-blue-400 font-bold">TS</span>,
      "Tailwind CSS": <span className="text-cyan-400 font-bold">TW</span>, 
      HTML: <FaHtml5 className="text-orange-400" />,
      CSS: <span className="text-blue-300 font-bold">CSS</span>,
      i18n: <span className="text-green-400 font-bold">🌐</span>,
      Vite: <span className="text-purple-400 font-bold">VITE</span>,
      Responsive: <span className="text-cyan-400">📱</span>,
    };
    return icons[tech] || <span className="text-gray-400">{tech}</span>;
  };

  if (!isOpen) {
    return (
      <section
        id="projects"
        className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto py-16"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gray-800 hover:bg-emerald-400/20 border-2 border-emerald-400 px-12 py-6 rounded-lg transition-all duration-300 hover:scale-105 group"
        >
          <h2 className="text-2xl font-bold text-emerald-400 mb-2">
            Portfólio de Soluções
          </h2> 
          <p className="text-gray-300 text-sm mb-4">
            Meus sistemas e aplicações que entregam valor.
          </p>

          <div className="flex justify-center gap-4">
            <FaReact className="text-blue-400 text-2xl group-hover:scale-110 transition-transform" />
            <SiNextdotjs className="text-white text-2xl group-hover:scale-110 transition-transform" />
            <FaNodeJs className="text-green-400 text-2xl group-hover:scale-110 transition-transform" />
            <FaDatabase className="text-purple-400 text-2xl group-hover:scale-110 transition-transform" />
            <FaLaptopCode className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform" />
          </div>

          <p className="text-gray-500 text-sm mt-3">
            Clique para ver todos os projetos
          </p>
        </button>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-8 max-w-6xl mx-auto py-16"
    >
      <div className="flex items-center justify-between w-full mb-12">
        <button
          onClick={() => setIsOpen(false)}
          className="text-emerald-400 hover:text-white transition-colors flex items-center gap-2"
        >
          ← Voltar
        </button>
        <h2 className="text-3xl font-bold text-emerald-400">Portfólio de Soluções</h2>
        <div></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            
            className={`bg-gray-800 border-2 border-${project.color}-400 rounded-lg overflow-hidden hover:bg-${project.color}-400/10 transition-all duration-300 hover:scale-105 group`}
          >
            <div className="relative h-48 bg-gray-700 overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className={`text-${project.color}-400 text-4xl`}>
                    🚀
                  </span>
                </div>
              )}

              <div className="absolute top-2 right-2">
                <span
                  className={`px-2 py-1 text-xs rounded-full bg-gray-900/80 ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3
                className={`text-xl font-semibold text-${project.color}-400 mb-2`}
              >
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-700 rounded text-xs"
                  >
                    {getTechIcon(tech)}
                    <span className="text-gray-300">{tech}</span>
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 bg-${project.color}-400 hover:bg-${project.color}-500 text-gray-400 px-3 py-2 rounded text-sm font-medium transition-colors flex items-center justify-center gap-2`}
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Demo
                  </a>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/adriano-rocha"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-800 hover:bg-emerald-400/20 border-2 border-emerald-400 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
        >
          <FaGithub className="text-emerald-400" />
          <span className="text-emerald-400 font-medium">
            Ver repositório completo
          </span>
        </a>
      </div>
    </section>
  );
}

export default Projects;
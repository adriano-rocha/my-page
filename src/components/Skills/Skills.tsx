import { useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaJs, FaGitAlt, FaDatabase } from 'react-icons/fa';

function Skills() {
  const [isOpen, setIsOpen] = useState(false);

  const skills = [
    {
      name: "HTML/CSS",
      color: "emerald",
      certificates: ["/certificates/html-css.png"]
    },
    {
      name: "Javascript", 
      color: "cyan",
      certificates: ["/certificates/js.png", "/certificates/js2.png"]
    },
    {
      name: "React",
      color: "blue", 
      certificates: ["/certificates/react1.png", "/certificates/react2.png"]
    },
    {
      name: "Node.js",
      color: "green",
      certificates: ["/certificates/node.png", "/certificates/node2.png", "/certificates/node3.png"]
    },
    {
      name: "Banco de Dados",
      color: "purple",
      certificates: ["/certificates/db.png", "/certificates/sql.png"]
    },
    {
      name: "Git",
      color: "orange",
      certificates: ["/certificates/git.png"]
    }
  ];

  const handleCertificateClick = (certificateUrl: string) => {
    window.open(certificateUrl, '_blank');
  };

  if (!isOpen) {
    return (
      <section
        id="skills"
        className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto py-16"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gray-800 hover:bg-emerald-400/20 border-2 border-emerald-400 px-12 py-6 rounded-lg transition-all duration-300 hover:scale-105 group"
        >
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">Skills</h2>          
          
          <div className="flex justify-center gap-4">
            <FaHtml5 className="text-emerald-400 text-2xl group-hover:scale-110 transition-transform" />
            <FaJs className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform" />
            <FaReact className="text-blue-400 text-2xl group-hover:scale-110 transition-transform" />
            <FaNodeJs className="text-green-400 text-2xl group-hover:scale-110 transition-transform" />
            <FaDatabase className="text-purple-400 text-2xl group-hover:scale-110 transition-transform" />
            <FaGitAlt className="text-orange-400 text-2xl group-hover:scale-110 transition-transform" />
          </div>
          
          <p className="text-gray-300 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
            Clique para ver certificados
          </p>
        </button>
      </section>
    );
  }

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-8 max-w-6xl mx-auto"
    >
      <div className="flex items-center justify-between w-full mb-12">
        <button
          onClick={() => setIsOpen(false)}
          className="text-emerald-400 hover:text-white transition-colors flex items-center gap-2"
        >
          ← Voltar
        </button>
        <h2 className="text-3xl font-bold text-emerald-400">Skills</h2>
        <div></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {skills.map((skill, skillIndex) => (
          <div 
            key={skillIndex}
            className={`bg-gray-800 border-2 border-${skill.color}-400 rounded-lg overflow-hidden hover:bg-${skill.color}-400/10 transition-all duration-300 hover:scale-105 group`}
          >
            <div className="p-6 text-center">
              <h3 className={`text-xl font-semibold text-${skill.color}-400 mb-4`}>
                {skill.name}
              </h3>              
              
              <div className="grid grid-cols-1 gap-3">
                {skill.certificates.map((certificate, certIndex) => (
                  <div
                    key={certIndex}
                    onClick={() => handleCertificateClick(certificate)}
                    className="relative cursor-pointer group/cert"
                  >
                    <img
                      src={certificate}
                      alt={`${skill.name} Certificate ${certIndex + 1}`}
                      className="w-full h-32 object-cover rounded border-2 border-gray-600 hover:border-white transition-colors"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/cert:opacity-100 transition-opacity rounded flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Ver certificado</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-xs text-gray-400 mt-3">
                {skill.certificates.length === 1 
                  ? '1 certificado'
                  : `${skill.certificates.length} certificados`
                }
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
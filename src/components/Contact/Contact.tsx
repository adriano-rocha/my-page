import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-8 max-w-4xl mx-auto"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">
          Entre em <span className="text-gray-300">Contato</span>
        </h2>
        <p className="text-emerald-400 text-xl mb-2">
          Vamos conversar sobre seu próximo projeto
        </p>
        <p className="text-gray-100 mb-12 max-w-md mx-auto">
          <i>
            Estou sempre aberto a novas oportunidades e colaborações.
            Entre em contato através das redes sociais.
          </i>
        </p>

        <div className="flex items-center justify-center gap-8">
          {/* GitHub */}
          <a
            href="https://github.com/adriano-rocha"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 border-2 border-gray-400 p-4 rounded-full shadow-lg shadow-gray-400/50 hover:shadow-gray-400/80 hover:scale-110 hover:bg-gray-400/10 transition-all duration-300 cursor-pointer group"
          >
            <FaGithub className="text-gray-400 text-2xl group-hover:text-white transition-colors duration-300" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/adriano-rocha-464044305/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 border-2 border-blue-400 p-4 rounded-full shadow-lg shadow-blue-400/50 hover:shadow-blue-400/80 hover:scale-110 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer group"
          >
            <FaLinkedin className="text-blue-400 text-2xl group-hover:text-blue-300 transition-colors duration-300" />
          </a>

          {/* Gmail */}
          <a
            href="mailto:adrianorocha.dev@gmail.com"
            className="bg-gray-800 border-2 border-red-400 p-4 rounded-full shadow-lg shadow-red-400/50 hover:shadow-red-400/80 hover:scale-110 hover:bg-red-400/10 transition-all duration-300 cursor-pointer group"
          >
            <FaEnvelope className="text-red-400 text-2xl group-hover:text-red-300 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
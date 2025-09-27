import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "adrianorocha.dev@gmail.com";

  // Função para copiar o e-mail para a área de transferência
  const handleCopyEmail = () => {
    // Verifica se a API de cópia está disponível
    if (navigator.clipboard) {
      navigator.clipboard.writeText(emailAddress);
      setCopied(true);

      // Reseta o status 'Copiado' após 2 segundos
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } else {
      // Fallback para navegadores antigos (opcional: usar a tag <a> mailto: )
      alert(
        `Seu navegador não suporta a cópia direta. Por favor, utilize o endereço: ${emailAddress}`
      );
    }
  };

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
          Vamos conversar sobre seu projeto
        </p>
        <p className="text-gray-100 mb-12 max-w-md mx-auto">
          <i>
            Estou sempre aberto a novas oportunidades e colaborações. Utilize o
            canal que preferir.
          </i>
        </p>

        <div className="flex items-center justify-center gap-8">
          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/5582998273188"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 border-2 border-green-400 p-4 rounded-full shadow-lg shadow-green-400/50 hover:shadow-green-400/80 hover:scale-110 hover:bg-green-400/10 transition-all duration-300 cursor-pointer group"
          >
            <FaWhatsapp className="text-green-400 text-2xl group-hover:text-green-300 transition-colors duration-300" />
          </a>

          {/* Botão GitHub */}
          <a
            href="https://github.com/adriano-rocha"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 border-2 border-gray-400 p-4 rounded-full shadow-lg shadow-gray-400/50 hover:shadow-gray-400/80 hover:scale-110 hover:bg-gray-400/10 transition-all duration-300 cursor-pointer group"
          >
            <FaGithub className="text-gray-400 text-2xl group-hover:text-white transition-colors duration-300" />
          </a>

          {/* Botão LinkedIn */}
          <a
            href="https://www.linkedin.com/in/adriano-rocha-464044305/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 border-2 border-blue-400 p-4 rounded-full shadow-lg shadow-blue-400/50 hover:shadow-blue-400/80 hover:scale-110 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer group"
          >
            <FaLinkedin className="text-blue-400 text-2xl group-hover:text-blue-300 transition-colors duration-300" />
          </a>

          {/* Botão Email (Novo: Copiar para Área de Transferência) */}
          <button
            onClick={handleCopyEmail}
            title={copied ? "E-mail Copiado!" : "Copiar E-mail"}
            className="bg-gray-800 border-2 border-red-400 p-4 rounded-full shadow-lg shadow-red-400/50 hover:shadow-red-400/80 hover:scale-110 transition-all duration-300 cursor-pointer group relative"
          >
            <FaEnvelope className="text-red-400 text-2xl group-hover:text-red-300 transition-colors duration-300" />

            {/* Tooltip de confirmação */}
            {copied && (
              <span className="absolute top-1/2 left-full ml-3 px-3 py-1 bg-gray-900 text-white text-xs rounded-full whitespace-nowrap shadow-md transform -translate-y-1/2">
                Copiado!
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;

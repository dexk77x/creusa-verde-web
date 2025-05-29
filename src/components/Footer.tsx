
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-school-green-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações da escola */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              EEEP Dona Creusa do Carmo Rocha
            </h3>
            <p className="text-school-green-light mb-4">
              Escola Estadual de Educação Profissional oferecendo ensino técnico de qualidade 
              para formar profissionais capacitados para o mercado de trabalho.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-school-green-light">
              <p>📍 Endereço da Escola</p>
              <p>📞 (85) 0000-0000</p>
              <p>✉️ contato@eeepdonacreusa.edu.br</p>
            </div>
          </div>

          {/* Redes sociais */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="space-y-2 text-school-green-light">
              <p>📘 Facebook: /eeepdonacreusa</p>
              <p>📷 Instagram: @eeepdonacreusa</p>
              <p>🐦 Twitter: @eeepdonacreusa</p>
            </div>
          </div>
        </div>

        <div className="border-t border-school-green-medium mt-8 pt-8 text-center text-school-green-light">
          <p>&copy; 2024 EEEP Dona Creusa do Carmo Rocha. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Desenvolvido com ❤️ para a educação cearense
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

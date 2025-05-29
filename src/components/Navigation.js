
// Navegação em JavaScript puro
function initializeNavigation() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Cursos', href: '#cursos' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Contato', href: '#contato' }
  ];

  // Criar estrutura do navbar
  navbar.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo e nome da escola -->
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <img src="https://www.seduc.ce.gov.br/wp-content/uploads/sites/37/2017/12/logo_seduc.png" 
                 alt="SEDUC" class="w-10 h-10 object-contain">
            <div class="ml-3">
              <h1 class="text-xl font-bold text-school-green-dark">
                EEEP Dona Creusa
              </h1>
              <p class="text-sm text-gray-600">do Carmo Rocha</p>
            </div>
          </div>
        </div>

        <!-- Menu desktop -->
        <div class="hidden md:flex items-center space-x-8" id="desktop-menu">
          ${menuItems.map(item => `
            <button onclick="scrollToSection('${item.href}')" 
                    class="text-gray-700 hover:text-school-green-dark px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-school-green-light rounded-md">
              ${item.name}
            </button>
          `).join('')}
        </div>

        <!-- Botão menu mobile -->
        <div class="md:hidden flex items-center">
          <button id="mobile-menu-button" class="text-gray-700 hover:text-school-green-dark p-2">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Menu mobile -->
      <div id="mobile-menu" class="md:hidden bg-white border-t border-gray-200 hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          ${menuItems.map(item => `
            <button onclick="scrollToSection('${item.href}'); closeMobileMenu();" 
                    class="block w-full text-left text-gray-700 hover:text-school-green-dark px-3 py-2 text-base font-medium hover:bg-school-green-light rounded-md transition-colors duration-200">
              ${item.name}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Event listeners
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Função global para scroll suave
  window.scrollToSection = function(href) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Função global para fechar menu mobile
  window.closeMobileMenu = function() {
    mobileMenu.classList.add('hidden');
  };
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initializeNavigation);

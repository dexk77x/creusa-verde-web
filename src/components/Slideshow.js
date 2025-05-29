
// Slideshow em JavaScript puro
function initializeSlideshow() {
  const slideshowContainer = document.getElementById('slideshow');
  if (!slideshowContainer) return;

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=600&fit=crop',
      title: 'Bem-vindos à EEEP Dona Creusa do Carmo Rocha',
      description: 'Educação técnica de qualidade formando profissionais para o futuro'
    },
    {
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
      title: 'Cursos Técnicos de Excelência',
      description: 'Informática, Administração e Design de Interiores com professores qualificados'
    },
    {
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop',
      title: 'Tecnologia e Inovação',
      description: 'Laboratórios modernos e ensino atualizado com as demandas do mercado'
    }
  ];

  let currentSlide = 0;
  let slideInterval;

  // Criar estrutura do slideshow
  slideshowContainer.innerHTML = `
    <div class="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg shadow-lg">
      <!-- Slides -->
      <div id="slides-container" class="relative w-full h-full">
        ${slides.map((slide, index) => `
          <div class="slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === 0 ? 'opacity-100' : 'opacity-0'}" 
               data-slide="${index}">
            <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h2 class="text-2xl md:text-4xl font-bold text-white mb-2">
                ${slide.title}
              </h2>
              <p class="text-lg md:text-xl text-white/90">
                ${slide.description}
              </p>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Botões de navegação -->
      <button id="prev-slide" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <button id="next-slide" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      <!-- Indicadores -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2" id="indicators">
        ${slides.map((_, index) => `
          <button onclick="goToSlide(${index})" 
                  class="indicator w-3 h-3 rounded-full transition-all duration-200 ${index === 0 ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}" 
                  data-slide="${index}">
          </button>
        `).join('')}
      </div>
    </div>
  `;

  // Funções de controle do slideshow
  function showSlide(n) {
    const allSlides = document.querySelectorAll('.slide');
    const allIndicators = document.querySelectorAll('.indicator');
    
    // Ocultar slide atual
    allSlides[currentSlide].classList.remove('opacity-100');
    allSlides[currentSlide].classList.add('opacity-0');
    allIndicators[currentSlide].classList.remove('bg-white');
    allIndicators[currentSlide].classList.add('bg-white/50');
    
    // Atualizar índice
    currentSlide = (n + slides.length) % slides.length;
    
    // Mostrar novo slide
    allSlides[currentSlide].classList.remove('opacity-0');
    allSlides[currentSlide].classList.add('opacity-100');
    allIndicators[currentSlide].classList.remove('bg-white/50');
    allIndicators[currentSlide].classList.add('bg-white');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Função global para ir para slide específico
  window.goToSlide = function(index) {
    showSlide(index);
  };

  // Event listeners
  document.getElementById('next-slide').addEventListener('click', nextSlide);
  document.getElementById('prev-slide').addEventListener('click', prevSlide);

  // Auto-play
  function startAutoPlay() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    if (slideInterval) {
      clearInterval(slideInterval);
    }
  }

  // Iniciar auto-play
  startAutoPlay();

  // Pausar auto-play quando hover nos controles
  const slideControls = document.querySelectorAll('#prev-slide, #next-slide, .indicator');
  slideControls.forEach(control => {
    control.addEventListener('mouseenter', stopAutoPlay);
    control.addEventListener('mouseleave', startAutoPlay);
  });
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initializeSlideshow);

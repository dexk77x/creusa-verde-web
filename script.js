
// Variáveis globais
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

// Navegação mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu mobile
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navegação suave
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Inicializar slideshow
    initSlideshow();
});

// Funções do Slideshow
function initSlideshow() {
    // Mostrar primeiro slide
    showSlide(0);
    
    // Auto-play do slideshow (trocar slide a cada 5 segundos)
    setInterval(function() {
        nextSlide();
    }, 5000);
}

function showSlide(index) {
    // Esconder todos os slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remover classe active de todos os indicadores
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Garantir que o índice está dentro dos limites
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    // Mostrar slide atual
    if (slides[currentSlideIndex]) {
        slides[currentSlideIndex].classList.add('active');
    }
    
    // Ativar indicador atual
    if (indicators[currentSlideIndex]) {
        indicators[currentSlideIndex].classList.add('active');
    }
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    showSlide(index - 1); // -1 porque os indicadores começam de 1
}

function nextSlide() {
    changeSlide(1);
}

function prevSlide() {
    changeSlide(-1);
}

// Efeitos de scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
});

// Animações ao scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.2s';
            entry.target.style.animationFillMode = 'both';
            entry.target.style.animationName = 'fadeInUp';
            entry.target.style.animationDuration = '0.6s';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.course-card, .teacher-card, .contact-card');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// Função para smooth scroll (fallback para navegadores mais antigos)
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = element.offsetTop - navHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Performance: Debounce para eventos de scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce ao evento de scroll
const debouncedScrollHandler = debounce(function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

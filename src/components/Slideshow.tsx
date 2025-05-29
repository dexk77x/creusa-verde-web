
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Imagens de exemplo (placeholder images)
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

  // Auto-play do slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg shadow-lg">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Conteúdo do slide */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 animate-fade-in">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-white/90 animate-slide-in">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Botões de navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

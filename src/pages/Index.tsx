
import React from 'react';
import Navigation from '../components/Navigation';
import Slideshow from '../components/Slideshow';
import CourseCard from '../components/CourseCard';
import TeacherCard from '../components/TeacherCard';
import Footer from '../components/Footer';

const Index = () => {
  // Dados dos cursos técnicos
  const courses = [
    {
      title: 'Informática',
      teachers: ['Elmen', 'Ricardo'],
      description: 'Formação completa em tecnologia da informação, programação e redes de computadores.',
      icon: '💻'
    },
    {
      title: 'Administração',
      teachers: ['Assis'],
      description: 'Gestão empresarial, empreendedorismo e administração de recursos.',
      icon: '📊'
    },
    {
      title: 'Design de Interiores',
      teachers: ['Stekel'],
      description: 'Criação de ambientes funcionais e estéticos com técnicas de design moderno.',
      icon: '🏠'
    }
  ];

  // Dados da equipe escolar
  const managementTeam = [
    { name: 'David', subject: 'Coordenador Escolar' },
    { name: 'Enedina', subject: 'Coordenadora Escolar' },
    { name: 'Gadelha', subject: 'Coordenador Escolar' },
    { name: 'Sandra', subject: 'Gestão' }
  ];

  const scienceTeachers = [
    { name: 'Herlen', subject: 'Professora de Química' },
    { name: 'Lia', subject: 'Professora de Biologia' },
    { name: 'Andre', subject: 'Professor de Física' },
    { name: 'Nagela', subject: 'Professora de Educação Física' }
  ];

  const humanitiesTeachers = [
    { name: 'Paiva', subject: 'Professor de História' },
    { name: 'Semiramis', subject: 'Professora de Sociologia' },
    { name: 'Lucas', subject: 'Professor de Filosofia' },
    { name: 'Ney', subject: 'Professor de Geografia' }
  ];

  const languageTeachers = [
    { name: 'Julio', subject: 'Professor de Português' },
    { name: 'Alba', subject: 'Professora de Espanhol' },
    { name: 'Claudia', subject: 'Professora de Inglês' }
  ];

  const mathTeachers = [
    { name: 'Airton', subject: 'Professor de Matemática' },
    { name: 'Gleuber', subject: 'Professor de Matemática' },
    { name: 'Sarah', subject: 'Professora de Matemática' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section id="inicio" className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-school-green-dark mb-4 animate-fade-in">
              EEEP Dona Creusa do Carmo Rocha
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-slide-in">
              Escola Estadual de Educação Profissional
            </p>
          </div>
          
          <Slideshow />
        </div>
      </section>

      {/* Missão e Boas-vindas */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-school-green-dark mb-8">
              Bem-vindos à Nossa Escola
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                A EEEP Dona Creusa do Carmo Rocha é uma instituição comprometida com a excelência 
                na educação profissional, oferecendo cursos técnicos de qualidade que preparam 
                nossos estudantes para os desafios do mercado de trabalho.
              </p>
              <p className="text-lg text-gray-600">
                Nossa missão é formar cidadãos competentes, éticos e preparados para contribuir 
                positivamente com a sociedade, através de uma educação inovadora e transformadora.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Cursos */}
      <section id="cursos" className="bg-school-green-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-school-green-dark mb-4">
              Nossos Cursos Técnicos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos cursos técnicos de alta qualidade com professores especializados 
              e infraestrutura moderna para sua formação profissional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Seção da Equipe */}
      <section id="equipe" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-school-green-dark mb-4">
              Nossa Equipe Escolar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os profissionais dedicados que fazem parte da nossa comunidade educativa.
            </p>
          </div>

          {/* Núcleo Gestor */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-school-green-dark mb-6 text-center">
              Núcleo Gestor
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {managementTeam.map((member, index) => (
                <TeacherCard key={index} {...member} />
              ))}
            </div>
          </div>

          {/* Ciências da Natureza */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-school-green-dark mb-6 text-center">
              Ciências da Natureza
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {scienceTeachers.map((teacher, index) => (
                <TeacherCard key={index} {...teacher} />
              ))}
            </div>
          </div>

          {/* Ciências Humanas */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-school-green-dark mb-6 text-center">
              Ciências Humanas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {humanitiesTeachers.map((teacher, index) => (
                <TeacherCard key={index} {...teacher} />
              ))}
            </div>
          </div>

          {/* Linguagens */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-school-green-dark mb-6 text-center">
              Linguagens
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {languageTeachers.map((teacher, index) => (
                <TeacherCard key={index} {...teacher} />
              ))}
            </div>
          </div>

          {/* Matemática */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-school-green-dark mb-6 text-center">
              Matemática
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mathTeachers.map((teacher, index) => (
                <TeacherCard key={index} {...teacher} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contato" className="bg-school-green-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-school-green-dark mb-8">
              Entre em Contato
            </h2>
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-600 mb-6">
                Estamos sempre prontos para atender você. Entre em contato conosco 
                para mais informações sobre nossos cursos e processos seletivos.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-2xl">📞</span>
                  <span className="text-lg text-school-green-dark font-semibold">
                    (85) 0000-0000
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-2xl">✉️</span>
                  <span className="text-lg text-school-green-dark font-semibold">
                    contato@eeepdonacreusa.edu.br
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

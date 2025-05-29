
import React from 'react';

interface TeacherCardProps {
  name: string;
  subject: string;
  image?: string;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ name, subject, image }) => {
  // Imagem placeholder caso não seja fornecida
  const defaultImage = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="relative">
        <img
          src={image || defaultImage}
          alt={`Professor ${name}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/20 to-transparent"></div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-school-green-dark mb-1">
          {name}
        </h3>
        <p className="text-gray-600 text-sm">
          {subject}
        </p>
      </div>
    </div>
  );
};

export default TeacherCard;

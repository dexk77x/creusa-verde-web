
import React from 'react';

interface CourseCardProps {
  title: string;
  teachers: string[];
  description?: string;
  icon?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, teachers, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-school-green-medium">
      <div className="flex items-center mb-4">
        {icon && (
          <div className="w-12 h-12 bg-school-green-light rounded-lg flex items-center justify-center mr-4">
            <span className="text-2xl">{icon}</span>
          </div>
        )}
        <h3 className="text-xl font-bold text-school-green-dark">
          {title}
        </h3>
      </div>
      
      {description && (
        <p className="text-gray-600 mb-4 text-sm">
          {description}
        </p>
      )}
      
      <div>
        <h4 className="font-semibold text-school-green-dark mb-2 text-sm">
          Professores:
        </h4>
        <div className="space-y-1">
          {teachers.map((teacher, index) => (
            <span 
              key={index}
              className="inline-block bg-school-green-light text-school-green-dark px-3 py-1 rounded-full text-sm mr-2 mb-1"
            >
              {teacher}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

import React from 'react';

interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string[];
}

export default function ExperienceCard({ icon, title, description }: ExperienceCardProps) {
  return (
    <div className='text-center space-y-4'>
      {/* Icon with yellow circle and vertical line */}
      <div className='flex flex-col items-center'>
        <div className='w-16 h-16 bg-[#F7F225] border-2 border-gray-300 rounded-full flex items-center justify-center mb-4'>
          {icon}
        </div>
        {/* Vertical line */}
        <div className='w-0.5 h-8 bg-[#F7F225]'></div>
      </div>

      {/* Title */}
      <h3 className='text-xl font-bold text-gray-800'>{title}</h3>

      {/* Description */}
      <div className='space-y-2'>
        {description.map((line, index) => (
          <p key={index} className='text-gray-600 text-sm leading-relaxed'>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

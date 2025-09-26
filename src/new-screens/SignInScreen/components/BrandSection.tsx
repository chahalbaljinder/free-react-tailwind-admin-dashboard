import React from 'react';

interface BrandSectionProps {
  companyName?: string;
  tagline?: string;
  className?: string;
}

const BrandSection: React.FC<BrandSectionProps> = ({
  companyName = "Megapolis",
  tagline = "Advisory",
  className = ''
}) => {
  return (
    <div className={`
      relative h-full min-h-screen
      bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800
      flex items-center justify-center
      ${className}
    `}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <div className="text-2xl font-bold text-indigo-900">
              {companyName.charAt(0)}
            </div>
          </div>
        </div>
        
        {/* Company Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          {companyName}
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-blue-200 font-light">
          {tagline}
        </p>
        
        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-300 rounded-full opacity-60"></div>
          <div className="w-2 h-2 bg-blue-200 rounded-full opacity-40"></div>
          <div className="w-2 h-2 bg-blue-100 rounded-full opacity-30"></div>
        </div>
      </div>
      
      {/* Additional Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-indigo-500 opacity-10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default BrandSection;
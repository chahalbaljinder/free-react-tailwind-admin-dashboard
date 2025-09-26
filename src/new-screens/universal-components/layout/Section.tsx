import React from 'react';

export interface SectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullHeight?: boolean;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  variant = 'default',
  size = 'md',
  fullHeight = false,
  className = ''
}) => {
  const baseClasses = 'w-full';
  
  const variantClasses = {
    default: 'bg-white',
    primary: 'bg-blue-50',
    secondary: 'bg-gray-50',
    dark: 'bg-gray-900 text-white'
  };

  const sizeClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };

  const heightClass = fullHeight ? 'min-h-screen flex items-center' : '';

  return (
    <section className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${heightClass} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
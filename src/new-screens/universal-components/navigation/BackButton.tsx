import React from 'react';

export interface BackButtonProps {
  onClick: () => void;
  label?: string;
  variant?: 'text' | 'button' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  label = 'Back',
  variant = 'text',
  size = 'md',
  showIcon = true,
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center transition-all duration-200 focus:outline-none';
  
  const variantClasses = {
    text: 'text-gray-600 hover:text-gray-900',
    button: 'bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
    ghost: 'text-gray-600 hover:bg-gray-100 rounded-md px-3 py-2 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {showIcon && (
        <svg
          className={`${iconSizes[size]} mr-2`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      )}
      {label}
    </button>
  );
};

export default BackButton;
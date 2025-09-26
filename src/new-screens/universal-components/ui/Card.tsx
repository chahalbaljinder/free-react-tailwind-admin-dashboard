import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  variant?: 'default' | 'bordered' | 'shadow' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
  variant = 'default',
  padding = 'md',
  className = '',
  header,
  footer
}) => {
  const baseClasses = 'bg-white rounded-lg overflow-hidden';
  
  const variantClasses = {
    default: 'border border-gray-200',
    bordered: 'border-2 border-gray-200',
    shadow: 'shadow-sm border border-gray-100',
    elevated: 'shadow-lg border border-gray-100'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {(header || title || description) && (
        <div className={`${padding !== 'none' ? 'px-6 py-4' : ''} border-b border-gray-100`}>
          {header || (
            <div>
              {title && (
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-sm text-gray-600">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
      )}
      
      <div className={paddingClasses[padding]}>
        {children}
      </div>
      
      {footer && (
        <div className={`${padding !== 'none' ? 'px-6 py-4' : ''} border-t border-gray-100 bg-gray-50`}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
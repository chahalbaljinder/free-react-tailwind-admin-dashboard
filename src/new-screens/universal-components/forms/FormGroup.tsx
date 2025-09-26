import React from 'react';

export interface FormGroupProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  error?: string;
  className?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({
  children,
  title,
  description,
  error,
  className = ''
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {(title || description) && (
        <div className="space-y-1">
          {title && (
            <h3 className="text-lg font-medium text-gray-900">
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
      
      <div className="space-y-4">
        {children}
      </div>
      
      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormGroup;
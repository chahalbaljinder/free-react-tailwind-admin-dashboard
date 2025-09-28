import React from 'react';

export interface SelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  success?: boolean;
  hint?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
  required = false,
  error,
  success = false,
  hint,
  size = 'md',
  fullWidth = true,
  className = '',
  id,
  name
}) => {
  const baseClasses = 'border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:cursor-not-allowed appearance-none bg-white';
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-4 py-3 text-base'
  };

  const stateClasses = error
    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
    : success
    ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
    : 'border-gray-300 focus:border-blue-900 focus:ring-blue-500';

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          required={required}
          className={`${baseClasses} ${sizeClasses[size]} ${stateClasses} ${widthClass} ${className} pr-10`}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Dropdown Arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      
      {(error || hint) && (
        <p className={`mt-1.5 text-xs ${error ? 'text-red-600' : success ? 'text-green-600' : 'text-gray-500'}`}>
          {error || hint}
        </p>
      )}
    </div>
  );
};

export default Select;
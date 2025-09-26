import React from 'react';

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  id?: string;
  name?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  error,
  size = 'md',
  className = '',
  id,
  name
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`flex items-start ${className}`}>
      <div className="flex items-center h-5">
        <input
          id={checkboxId}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className={`
            ${sizeClasses[size]} text-blue-600 border-gray-300 rounded
            focus:ring-blue-500 focus:ring-2 focus:ring-offset-0
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors duration-200
            ${error ? 'border-red-500' : ''}
          `}
        />
      </div>
      {label && (
        <div className="ml-3 text-sm">
          <label htmlFor={checkboxId} className={`
            font-medium cursor-pointer select-none
            ${disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-900'}
            ${error ? 'text-red-600' : ''}
          `}>
            {label}
          </label>
          {error && (
            <p className="text-red-600 text-xs mt-1">{error}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
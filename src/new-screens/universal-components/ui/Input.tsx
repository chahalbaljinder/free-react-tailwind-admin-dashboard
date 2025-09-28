import React, { forwardRef } from 'react';

export interface InputProps {
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  success?: boolean;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  required = false,
  error,
  success = false,
  hint,
  leftIcon,
  rightIcon,
  size = 'md',
  fullWidth = true,
  className = '',
  id,
  name
}, ref) => {
  const baseClasses = 'border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:cursor-not-allowed placeholder-gray-400';
  
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
  const paddingLeft = leftIcon ? 'pl-10' : '';
  const paddingRight = rightIcon ? 'pr-10' : '';

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400 text-sm">{leftIcon}</span>
          </div>
        )}
        
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={(e) => onChange?.(e.target.value)}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          required={required}
          className={`${baseClasses} ${sizeClasses[size]} ${stateClasses} ${widthClass} ${paddingLeft} ${paddingRight} ${className}`}
        />
        
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-400 text-sm">{rightIcon}</span>
          </div>
        )}
      </div>
      
      {(error || hint) && (
        <p className={`mt-1.5 text-xs ${error ? 'text-red-600' : success ? 'text-green-600' : 'text-gray-500'}`}>
          {error || hint}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
import React, { forwardRef } from 'react';

export interface TextAreaProps {
  label?: string;
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
  rows?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  fullWidth?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  label,
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
  rows = 4,
  resize = 'vertical',
  fullWidth = true,
  className = '',
  id,
  name
}, ref) => {
  const baseClasses = 'border rounded-lg px-4 py-2.5 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:cursor-not-allowed placeholder-gray-400';
  
  const stateClasses = error
    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
    : success
    ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
    : 'border-gray-300 focus:border-blue-900 focus:ring-blue-500';

  const resizeClasses = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <textarea
        ref={ref}
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
        rows={rows}
        className={`${baseClasses} ${stateClasses} ${resizeClasses[resize]} ${widthClass} ${className}`}
      />
      
      {(error || hint) && (
        <p className={`mt-1.5 text-xs ${error ? 'text-red-600' : success ? 'text-green-600' : 'text-gray-500'}`}>
          {error || hint}
        </p>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
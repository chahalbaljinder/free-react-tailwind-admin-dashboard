import React from 'react';

interface FormInputProps {
  label: string;
  type: 'email' | 'password' | 'text';
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false,
  error,
  className = ''
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full px-4 py-3 rounded-lg border border-gray-200 
          focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent
          text-gray-700 placeholder-gray-400
          transition-all duration-200
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
        `}
        required={required}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default FormInput;
import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  className = '',
  fullWidth = false
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        px-6 py-3 rounded-lg font-medium text-white
        bg-blue-900 hover:bg-blue-800 focus:bg-blue-800
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        disabled:bg-gray-400 disabled:cursor-not-allowed
        transition-all duration-200
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default PrimaryButton;
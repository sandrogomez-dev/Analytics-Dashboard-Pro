import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'white';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'primary',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  const variantClasses = {
    primary: 'border-teal-600 border-t-transparent',
    secondary: 'border-slate-600 border-t-transparent',
    white: 'border-white border-t-transparent',
  };

  return (
    <div
      className={`
        animate-spin rounded-full border-2
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner; 
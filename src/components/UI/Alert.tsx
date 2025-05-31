import React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  className = '',
}) => {
  const variantStyles = {
    info: {
      container: 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-400',
      icon: <Info className="h-4 w-4" />,
      iconColor: 'text-blue-500',
    },
    success: {
      container: 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-400',
      icon: <CheckCircle className="h-4 w-4" />,
      iconColor: 'text-emerald-500',
    },
    warning: {
      container: 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-400',
      icon: <AlertCircle className="h-4 w-4" />,
      iconColor: 'text-amber-500',
    },
    error: {
      container: 'border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-400',
      icon: <XCircle className="h-4 w-4" />,
      iconColor: 'text-red-500',
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={`rounded-lg border p-4 ${styles.container} ${className}`}>
      <div className="flex">
        <div className={`flex-shrink-0 ${styles.iconColor}`}>
          {styles.icon}
        </div>
        <div className="ml-3">
          {title && (
            <h3 className="text-sm font-medium mb-1">
              {title}
            </h3>
          )}
          <div className="text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert; 
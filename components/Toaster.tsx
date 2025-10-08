
import React, { useEffect } from 'react';
import { cn } from '../lib/utils';
import { CheckCircleIcon, XIcon } from './icons';

export type ToastVariant = 'default' | 'destructive';

export interface ToastProps {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToasterProps {
  toasts: ToastProps[];
  onDismiss: (id: string) => void;
}

const toastVariants = {
  default: 'bg-card border-accent-blue',
  destructive: 'bg-card border-red-500',
};

const iconVariants = {
  default: <CheckCircleIcon className="w-6 h-6 text-accent-blue" />,
  destructive: <XIcon className="w-6 h-6 text-red-500" />,
};

export const Toaster: React.FC<ToasterProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed top-0 right-0 z-50 p-4 space-y-2 w-full max-w-sm">
      {toasts.map(({ id, title, description, variant = 'default', duration = 3000 }) => (
        <Toast
          key={id}
          id={id}
          title={title}
          description={description}
          variant={variant}
          duration={duration}
          onDismiss={onDismiss}
        />
      ))}
    </div>
  );
};

const Toast: React.FC<ToastProps & { onDismiss: (id: string) => void }> = ({
  id,
  title,
  description,
  variant = 'default',
  duration,
  onDismiss,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(id);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [id, duration, onDismiss]);

  return (
    <div
      className={cn(
        'relative w-full p-4 pr-8 rounded-lg shadow-lg border-l-4 flex items-start space-x-3 text-card-foreground animate-slideInUp',
        toastVariants[variant]
      )}
    >
      <div className="flex-shrink-0">{iconVariants[variant]}</div>
      <div className="flex-1">
        <p className="font-semibold">{title}</p>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <button
        onClick={() => onDismiss(id)}
        className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
      >
        <XIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

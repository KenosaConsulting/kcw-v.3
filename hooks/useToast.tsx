import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Toaster, ToastProps } from '../components/Toaster';

type ToastOptions = Omit<ToastProps, 'id'>;

interface ToastContextType {
  toast: (options: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

let toastCount = 0;

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = useCallback(({ title, description, variant = 'default', duration = 3000 }: ToastOptions) => {
    const id = `toast-${toastCount++}`;
    setToasts((prevToasts) => [...prevToasts, { id, title, description, variant, duration }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
  }, []);

  // FIX: Replaced JSX with React.createElement because this is a .ts file, not .tsx.
  return React.createElement(
    ToastContext.Provider,
    { value: { toast } },
    children,
    React.createElement(Toaster, { toasts: toasts, onDismiss: removeToast })
  );
};

import React, { useEffect, ReactNode } from 'react';
import { XIcon } from '../icons';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const dialogTitleId = 'dialog-title';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in-up"
      style={{ animationDuration: '0.3s'}}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={dialogTitleId}
    >
      <div
        className="relative z-50 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg border bg-card text-card-foreground shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col space-y-1.5 p-6 border-b">
          <h2 id={dialogTitleId} className="text-xl font-semibold leading-none tracking-tight text-accent-blue-light">{title}</h2>
        </div>
        <div className="p-6">
            {children}
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-blue focus-visible:ring-offset-background"
          aria-label="Close dialog"
        >
          <XIcon className="w-6 h-6" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
};
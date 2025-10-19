// src/components/hooks/use-toast.ts
import { useState, useCallback } from 'react';

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

export interface ToastAction {
  altText: string;
  action: () => void;
}

export interface ToastProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
  action?: ToastAction;
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback(({ title, description, variant = 'default', action }: ToastProps) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = {
      id,
      title,
      description,
      variant,
    };

    setToasts((prev) => [...prev, newToast]);

    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);

    return {
      id,
      dismiss: () => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      },
      update: (props: ToastProps) => {
        setToasts((prev) =>
          prev.map((t) =>
            t.id === id
              ? {
                  ...t,
                  title: props.title,
                  description: props.description,
                  variant: props.variant,
                }
              : t
          )
        );
      },
    };
  }, []);

  return {
    toast,
    toasts,
    dismiss: (toastId?: string) => {
      if (toastId) {
        setToasts((prev) => prev.filter((t) => t.id !== toastId));
      } else {
        setToasts([]);
      }
    },
  };
}

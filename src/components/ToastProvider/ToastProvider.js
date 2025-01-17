import React from 'react';
import { useKeydown } from '../../hooks';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])
  useKeydown(
    'Escape',
    React.useCallback(() => setToasts([]), [])
  );

  const removeToast = (id) => {
    const updatedToasts = toasts.filter((toast) => toast.id !== id)
    setToasts(updatedToasts)
  }

  const addToast = (message, variant) => {
    setToasts([...toasts, { id: crypto.randomUUID(), message, variant } ]);
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])


  React.useEffect(() => {
    console.log('ToastShelf useEffect');

    const handleEscape = (event) => {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }

      if (event.key === 'Escape') {
        setToasts([]);
      }

      return () => {

      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

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

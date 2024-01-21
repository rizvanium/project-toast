import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts=[], setToasts }) {

  const removeToast = (id) => {
    const updatedToasts = toasts.filter((toast) => toast.id !== id)
    setToasts(updatedToasts)
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, message }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} handleClose={() => removeToast(id)}>{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);

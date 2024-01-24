import React from "react";

export const useKeydown = (key, handler) => {
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }

      if (event.key === key) {
        handler();
      }

      return () => {

      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [key, handler])
}
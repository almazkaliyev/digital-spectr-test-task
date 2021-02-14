/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/prefer-default-export */
import React from 'react';

interface Callback {
  (): void;
}

export const useClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Callback
): void => {
  React.useEffect(() => {
    const handleClickOutside = (event: Event): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);
};

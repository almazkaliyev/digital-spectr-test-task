import React from 'react';
import { createPortal } from 'react-dom';

const Modal: React.FC = ({ children }) => {
  const presentational = document.createElement('div');

  React.useEffect(() => {
    presentational.classList.add('presentational');
    document.body.appendChild(presentational);

    return () => {
      document.body.removeChild(presentational);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(children, presentational);
};

export default Modal;

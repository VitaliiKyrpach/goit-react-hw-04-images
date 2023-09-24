import { useEffect } from 'react';

export const Modal = ({ image, toggle }) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') toggle();
    };
    document.addEventListener('keydown', handleEsc);

    return () => document.removeEventListener('keydown', handleEsc);
  });

  return (
    <div className="Overlay" onClick={toggle}>
      <div className="Modal">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

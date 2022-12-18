import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Overlay, ModalImg } from 'index';

export const Modal = ({ fullImage, onClose }) => {
  const keyDownHandler = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Overlay onClick={() => onClose()}>
      <ModalImg>
        <img src={fullImage} alt="Gallery img" />
      </ModalImg>
    </Overlay>
  );
};

Modal.propTypes = {
  fullImage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

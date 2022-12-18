import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { GalleryItem, GalleryItemImg, Modal } from 'index';

export const ImageGalleryItem = ({ previewImg, fullImage }) => {
  const [ismodalOpen, setIsmodalOpen] = useState(false);

  const modalToggler = () => {
    setIsmodalOpen(ismodalOpen => !ismodalOpen);
  };

  return (
    <GalleryItem>
      <GalleryItemImg
        src={previewImg}
        alt="Gallery image"
        onClick={() => modalToggler()}
      />

      {ismodalOpen && <Modal fullImage={fullImage} onClose={modalToggler} />}
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  fullImage: PropTypes.string.isRequired,
  previewImg: PropTypes.string.isRequired,
};

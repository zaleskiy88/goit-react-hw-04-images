import React, { useState, useEffect } from 'react';
import { getImagesData } from 'api';
import { PropTypes } from 'prop-types';

import { ImageGalleryItem, Gallery, LoadMoreButton, Loader } from 'index';

export const ImageGallery = ({ searchQuery }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMoreHandler = () => {
    setPage(state => state + 1);
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    setLoading(true);
    setImages([]);

    getImagesData(1, searchQuery).then(imagesData => {
      setImages(imagesData);
      setLoading(false);
      setPage(1);
    });
  }, [searchQuery]);

  useEffect(() => {
    if (page > 1) {
      setLoading(true);
      getImagesData(page, searchQuery).then(imagesData => {
        setImages(state => [...state, ...imagesData]);
        setLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      {images.length > 0 && (
        <Gallery>
          {images.map(item => {
            return (
              <ImageGalleryItem
                previewImg={item.webformatURL}
                fullImage={item.largeImageURL}
                key={item.id}
              />
            );
          })}
        </Gallery>
      )}

      {loading && <Loader />}

      {images.length >= 12 && <LoadMoreButton onClick={loadMoreHandler} />}
    </>
  );
};

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

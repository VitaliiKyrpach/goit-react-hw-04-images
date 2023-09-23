import { ImageGalleryItem } from 'components/ImageGalleryItem';
export const ImageGallery = ({ photos }) => {
  return (
    <ul className="ImageGallery">
      {photos.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          smImage={webformatURL}
          bgImage={largeImageURL}
        />
      ))}
    </ul>
  );
};

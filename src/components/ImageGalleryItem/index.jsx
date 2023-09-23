import { useImg } from 'components/context';
export const ImageGalleryItem = ({ smImage, bgImage }) => {
  const { toggleModal } = useImg();
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={smImage}
        alt=""
        onClick={() => toggleModal(bgImage)}
      />
    </li>
  );
};

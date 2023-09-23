import { SearchBar } from './SearchBar';
import { ImageGallery } from './ImageGallery';
import { useEffect, useState } from 'react';
import { getPhotos } from 'services/api';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { ImgContext } from './context';
export const App = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const onSubmit = input => {
    setQuery(input);
    setCurrentPage(1);
    setIsLoading(true);
  };
  const addPage = () => {
    setCurrentPage(prev => prev + 1);
  };
  const toggleModal = bgImage => {
    setIsModal(prev => !prev);
    setModalImg(bgImage);
  };
  useEffect(() => {
    const fetch = async () => {
      const data = await getPhotos(query, currentPage);
      currentPage === 1
        ? setPhotos(data.data.hits)
        : setPhotos(prev => [...prev, ...data.data.hits]);
      setLoadMore(currentPage < Math.ceil(data.data.totalHits / 12));
      setIsLoading(false);
    };
    query && fetch();
  }, [currentPage, query]);

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <ImgContext.Provider value={{ toggleModal }}>
        {photos && <ImageGallery photos={photos} />}
      </ImgContext.Provider>
      {isLoading && <Loader />}
      {loadMore && <Button addPage={addPage} />}
      {isModal && <Modal image={modalImg} toggle={toggleModal} />}
    </div>
  );
};

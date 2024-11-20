import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import searchFoto from "./servise/servise";
import { Toaster, toast } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [value, setValue] = useState(""); // Значення пошуку
  const [photos, setPhotos] = useState([]); // Масив фотографій
  const [error, setError] = useState(null); // Помилки
  const [isLoading, setIsLoading] = useState(false); // Завантаження
  const [page, setPage] = useState(1); // Номер сторінки
  const [selectedPhoto, setSelectedPhoto] = useState(null); // Для выбранного фото

  useEffect(() => {
    if (!value) return;

    async function fetchArticles() {
      setIsLoading(true);
      try {
        const response = await searchFoto(15, value, page);
        if (response.results && response.results.length > 0) {
          setPhotos((prevPhotos) => [
            ...prevPhotos,
            ...response.results.filter(
              (newPhoto) =>
                !prevPhotos.some((photo) => photo.id === newPhoto.id)
            ),
          ]);
        } else if (response.results.length === 0 && page === 1) {
          toast.error("No results found. Try a different query.");
        }
      } catch (error) {
        setError(error.message);
        toast.error("Oops! Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchArticles();
  }, [value, page]);

  const onSubmit = (searchValue) => {
    if (!searchValue.trim()) {
      toast.error("Please enter a search term.");
      return;
    }
    setValue(searchValue);
    setPhotos([]); // Скидаємо попередні результати
    setError(null);
    setPage(1); // Починаємо з першої сторінки
  };

  const loadMorePhotos = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleModalClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <SearchBar onSubmit={onSubmit} />
      {error && <p>Error: {error}</p>}
      {photos.length > 0 && (
        <ImageGallery photos={photos} onPhotoClick={handlePhotoClick} />
      )}
      {isLoading && <Loader />}
      {photos.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={loadMorePhotos} />
      )}
      <ImageModal
        isOpen={!!selectedPhoto}
        onRequestClose={handleModalClose}
        photo={selectedPhoto}
      />
    </>
  );
}

export default App;

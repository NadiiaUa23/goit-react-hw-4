import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import searchFoto from "./servise/servise";
import { Toaster, toast } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  // Значення пошуку
  const [value, setValue] = useState("");
  // Додаємо стан для збереження фотографій
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasImages, setHasImages] = useState(1);

  useEffect(() => {
    if (!value) return;

    async function fetchArticles() {
      setIsLoading(true);
      try {
        const response = await searchFoto(15, value);
        console.log(response); // Перевір
        if (response.results && response.results.length > 0) {
          setPhotos((prevPhotos) => [...prevPhotos, ...response.results]); // Додаємо нові зображення
        }
        if (response.results.length === 0 && hasImages === 1) {
          toast.error("No results found. Try a different query.");
        }
      } catch (error) {
        setError(error.message);
        toast.error("Opps! Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    // Викликаємо її одразу після оголошення
    fetchArticles();
  }, [value, hasImages]);

  const onSubmit = (value) => {
    //проверка: Если пользователь нажмет на кнопку поиска, но ничего не введет в поле (или оставит пробелы), функция trim() удаляет пробелы в начале и конце строки.
    if (!value.trim()) {
      toast.error("Please enter a search term.");
      return;
    }
    setValue(value);
    setPhotos([]);
    setError(null);
    setHasImages(1); // Скидаємо сторінку на 1 при новому запиті
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <SearchBar onSubmit={onSubmit} />
      {error && <p>Error: {error}</p>}
      {/* Показуємо помилку, якщо вона є */}
      {photos.length > 0 && <ImageGallery photos={photos} />}
      {isLoading && <Loader />}
      {photos.length > 0 && !isLoading && <LoadMoreBtn />}
    </>
  );
}

export default App;

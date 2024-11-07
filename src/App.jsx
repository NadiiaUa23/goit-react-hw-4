import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import searchFoto from "./servise/servise";
import { toast } from "react-hot-toast"; //Toaster
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  // Значення пошуку
  const [value, setValue] = useState("");
  // Додаємо стан для збереження фотографій
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!value) return;

    async function fetchArticles() {
      try {
        const response = await searchFoto(10, value);
        console.log(response); // Перевірте структуру відповіді

        if (response.results) {
          setPhotos(response.results);
        }
        if (response.results.length === 0) {
          toast.error("No results found. Try a different query.");
        }
      } catch (error) {
        setError(error.message);
        toast.error("Opps! Please try again.");
      }
    }

    // Викликаємо її одразу після оголошення
    fetchArticles();
  }, [value]);

  const onSubmit = (value) => {
    //проверка: Если пользователь нажмет на кнопку поиска, но ничего не введет в поле (или оставит пробелы), функция trim() удаляет пробелы в начале и конце строки.
    if (!value.trim()) {
      toast.error("Please enter a search term.");
      return;
    }
    setValue(value);
    setPhotos([]);
    setError(null);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error && <p>Error: {error}</p>}
      {/* Показуємо помилку, якщо вона є */}
      {photos.length > 0 && <ImageGallery photos={photos} />}
    </>
  );
}

export default App;

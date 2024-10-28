import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";
import searchFoto from "./servise/servise";

function App() {
  const [value, setValue] = useState(""); // Значення пошуку
  const [photos, setPhotos] = useState([]); // Додаємо стан для збереження фотографій
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!value) return;

    async function fetchArticles() {
      try {
        const response = await searchFoto(10, value);
        setPhotos(response.data.hits);
      } catch (error) {
        console.log(error.message);
      }
    }

    // 2. Викликаємо її одразу після оголошення
    fetchArticles();
  }, [value]);

  const onSubmit = (value) => {
    setValue(value);
    // setPhotos([]);
    setError(null);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error && <p>Error: {error}</p>} {/* Показуємо помилку, якщо вона є */}
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";
import serchFoto from "./servise/servise";

function App() {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!value) return;

    async function fetchArticles() {
      // console.log(response);

      try {
        const response = await serchFoto(1, value);
      } catch (error) {
        console.log(error.message);
      }
    }

    // 2. Викликаємо її одразу після оголошення
    fetchArticles();
  }, [value]);

  const onSubmit = (value) => {
    setValue(value);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
    </>
  );
}

export default App;

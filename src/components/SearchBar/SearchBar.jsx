import { toast } from "react-hot-toast";
import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import css from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      toast("Please enter a search term.");
      return;
    }
    onSubmit(inputValue);
    setInputValue(""); // Очистим инпут после сабмита
  };

  return (
    <>
      <header className={css.heder}>
        <form onSubmit={handleSubmit} className={css.search}>
          <button type="submit" className={css.btn}>
            <FcSearch />
            <input
              name="search"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={inputValue}
              onChange={handleInputChange}
              className={css.input}
            />
          </button>
        </form>
      </header>
    </>
  );
}

export default SearchBar;

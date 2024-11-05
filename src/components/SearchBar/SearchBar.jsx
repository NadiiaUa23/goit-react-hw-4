import { toast } from "react-hot-toast";
import { useState } from "react";

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
      <header>
        <form onSubmit={handleSubmit}>
          <input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
}

export default SearchBar;

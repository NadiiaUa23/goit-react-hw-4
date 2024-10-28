import { toast } from "react-hot-toast";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue.apply(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = e.target.elements.search.value;
    onSubmit(value);
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
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;

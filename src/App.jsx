import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import axios from "axios";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "https://api.unsplash.com/photos/?client_id=ap6Ua4fpzUMLURTa6HJBsMzGZdxERQbbEI_i0dC8JsU"
      );
	  console.log(response);
    }

	// 2. Викликаємо її одразу після оголошення
    fetchArticles();
  }, []);

  return (
    <>
     <SearchBar />

    </>
  )
}

export default App

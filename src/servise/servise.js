import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.params = {
  client_id: "ap6Ua4fpzUMLURTa6HJBsMzGZdxERQbbEI_i0dC8JsU",
};

async function searchFoto(page, query) {
  const respons = await axios.get(
    `/search/photos/?page=${page}&query=${query}&orientation=landscape`
  );
  console.log(respons.data); // перевірка, що отримуємо від API

  return respons.data; // повертаємо повний об'єкт даних
}
export default searchFoto;

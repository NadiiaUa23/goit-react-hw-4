import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.params = {
  client_id: "ap6Ua4fpzUMLURTa6HJBsMzGZdxERQbbEI_i0dC8JsU",
};

async function serchFoto(page, query) {
  const respons = await axios.get(
    `/search/photos/?page=${page}&query=${query}&orientation=landscape`
  );

  return respons.data;
}
export default serchFoto;

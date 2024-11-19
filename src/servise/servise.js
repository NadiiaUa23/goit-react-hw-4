import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.params = {
  client_id: "ap6Ua4fpzUMLURTa6HJBsMzGZdxERQbbEI_i0dC8JsU",
};

async function searchFoto(perPage, query, page = 1) {
  const response = await axios.get(`/search/photos/`, {
    params: {
      query,
      page,
      per_page: perPage,
      orientation: "landscape",
    },
  });
  return response.data;
}
export default searchFoto;

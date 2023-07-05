import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_MOVIE_API_URL + "/",
  params: {
    api_key: import.meta.env.VITE_APP_MOVIE_API_KEY,
   
  },
});

export default instance;

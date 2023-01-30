import axios from 'axios';
export async function fetchApi() {
  const API_KEY = 'e32bfdef8b19fee5cb99e2b4c56ab1dd';
  const API_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key';
  const response = await axios.get(`${API_URL}=${API_KEY}`);
  return response.data;
}

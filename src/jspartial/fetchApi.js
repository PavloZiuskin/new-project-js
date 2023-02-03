import axios from 'axios';
export async function fetchApi(page = 1) {
  const API_KEY = 'e32bfdef8b19fee5cb99e2b4c56ab1dd';
  const API_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key';
  const response = await axios.get(`${API_URL}=${API_KEY}&page=${page}`);
  return response.data;
}

export async function fetchInputApi(query) {
  const API_KEY = 'e32bfdef8b19fee5cb99e2b4c56ab1dd';
  const API_URL_MOVIE = 'https://api.themoviedb.org/3/search/movie';
  const response = await axios.get(
    `${API_URL_MOVIE}?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
}

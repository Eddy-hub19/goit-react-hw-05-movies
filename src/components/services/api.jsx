import axios from 'axios';
// const API = '429901df921e7a06d9fe261cd0c4ab69';
// https://api.themoviedb.org/3/movie/550?api_key=429901df921e7a06d9fe261cd0c4ab69
// const BASE_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

// ${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
// ${ORIGIN}trending/movie/week?api_key=${KEY}`);

const API_KEY = '429901df921e7a06d9fe261cd0c4ab69';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const searchMovie = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  console.log(response);
  return response.data;
};

export const fetchMovie = async movieId => {
  const response = await fetch(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const castMovie = async movieId => {
  const response = await fetch(`movie/${movieId}/credits?api_key=${API_KEY}`);
  return response.data;
};

export const reviewsMovie = async movieId => {
  const response = await fetch(`movie/${movieId}/reviews?api_key=${API_KEY}`);
  return response.data;
};

/* Маршруты */

/* '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
'/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
'/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
/movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
/movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails. */

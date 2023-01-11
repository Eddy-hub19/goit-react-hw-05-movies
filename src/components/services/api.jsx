import axios from 'axios';
// const API = '429901df921e7a06d9fe261cd0c4ab69';
// https://api.themoviedb.org/3/movie/550?api_key=429901df921e7a06d9fe261cd0c4ab69

const API_KEY = '429901df921e7a06d9fe261cd0c4ab69';
const BASE_URL = `https://api.themoviedb.org/3/movie/100?api_key=${API_KEY}`;
axios.defaults.baseURL = BASE_URL;

axios.defaults.params = {
  key: API_KEY,
};

export const getMovies = async query => {
  const config = {
    params: {
      q: query,
    },
  };
  const response = await axios.get('', config);

  return response.data;
};

// console.log(getMovies());

// export const MovieDetails = async query => {
//   const config = {
//     params: {
//       q: query,
//     },
//   };
//   const response = await axios.get('', config);
//   return response.data;
// };

// export const MovieReviews = async query => {
//   const config = {
//     params: {
//       q: query,
//     },
//   };
//   const response = await axios.get('', config);
//   return response.data;
// };

/* Маршруты */

/* '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
'/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
'/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
/movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
/movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails. */

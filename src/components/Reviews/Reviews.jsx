// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.

import { reviewsMovie } from 'components/services/api';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchData() {
      const response = await reviewsMovie(movieId);
      const data = response.results;
      console.log(data);
    }

    fetchData();
  }, [movieId]);

  return <div>Reviews {movieId}</div>;
};

// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.

import { reviewsMovie } from 'components/services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchData() {
      const response = await reviewsMovie(movieId);
      const results = response.results;
      setMovieReviews(results);
    }

    fetchData();
  }, [movieId]);

  if (movieReviews) {
    return (
      <div>
        <h2>Reviews</h2>
        <ul>
          {movieReviews.map(({ author, content }) => (
            <li key={author}>
              <h2>Author: {author}</h2>
              <p>Content: {content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

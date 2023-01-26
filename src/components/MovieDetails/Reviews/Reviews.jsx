// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.

import { reviewsMovie } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchData() {
      const response = await reviewsMovie(movieId);
      console.log(response);
      setMovieReviews(response.results);
    }

    fetchData();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {movieReviews &&
          movieReviews.map(({ author, content }) => (
            <li key={author}>
              <h2>Author: {author}</h2>
              <p>Content: {content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Reviews;

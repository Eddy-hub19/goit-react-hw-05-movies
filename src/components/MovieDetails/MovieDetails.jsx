// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
import { fetchMovieById } from 'components/services/api';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
export const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState(null);
  console.log(dataMovie);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetchMovieById(movieId);
      setDataMovie(response);
    }

    fetchData();
  }, [movieId]);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';
  if (!dataMovie) {
    return 'loading';
  }
  const { poster_path, title, id, popularity, overview } = dataMovie;
  return (
    <>
      <Link to={'/'}>back ≤ </Link>
      <ul>
        <li key={id}>
          {poster_path ? (
            <img width="300" src={baseImgUrl + poster_path} alt={title} />
          ) : (
            'no image'
          )}
          <div style={{ padding: '40px 10px' }}>
            <h2>{title}</h2>
            <span>{popularity}</span>
            <p>{overview}</p>
          </div>
          <li>
            <p>Additional info:</p>
            <Link>Cast</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
        </li>
      </ul>
      <div>Now showing product with id - {movieId}</div>
    </>
  );
};

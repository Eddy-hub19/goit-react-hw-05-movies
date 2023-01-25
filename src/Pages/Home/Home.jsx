import './Home.styled.css';

import { useEffect, useState } from 'react';
import { getMovies } from 'components/services/api';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([{}]);
  useEffect(() => {
    async function fetchData() {
      const response = await getMovies();
      const res = response.results;
      setMovies(res);
      console.log(res);
    }

    fetchData();
  }, []);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div>
      <h2 className="trendingTitle">Trending today</h2>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 0,
          padding: 0,
        }}
        className="moviesList"
      >
        {movies.map(({ id, title, backdrop_path }) => (
          <li key={id} className="movieItem">
            <Link to={`movies/${id}`}>
              {title}
              {backdrop_path && (
                <img width="300" src={baseImgUrl + backdrop_path} alt={title} />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

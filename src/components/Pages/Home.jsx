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
    }

    fetchData();
  }, []);
  return (
    <div>
      <h2 className='trendingTitle'>Trending today</h2>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 0,
          padding: 0,
        }}
        className="moviesList"
      >
        {movies.map(({ id, title }) => (
          <li key={id} className="movieItem">
            <Link to={`movies/${id}`}>{title} Fight Club</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

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
      <h2>HOME</h2>
      <h4>Trending today</h4>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 0,
          padding: 0,
        }}
      >
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies:/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

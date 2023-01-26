import './Home.styled.css';

import { useEffect, useState } from 'react';
import { getMovies } from 'services/api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([{}]);
  useEffect(() => {
    async function fetchData() {
      const response = await getMovies();
      const res = response.results;
      setMovies(res);
    }

    fetchData();
  }, []);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div>
      <h2 className="trendingTitle">Trending today</h2>
      <ul className="moviesList">
        {movies.map(({ id, title, backdrop_path }) => (
          <li key={Math.random(id)} className="movieItem">
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

export default Home;

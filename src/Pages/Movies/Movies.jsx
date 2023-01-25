// import { Search } from 'components/Search/Search';
import { searchMovie } from 'components/services/api';
import { useEffect, useState } from 'react';

export const Movies = ({query}) => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    async function fetchData() {
      const response = await searchMovie(query);
      const data = response.results;
      setData(data);
    }

    fetchData();
  }, [query]);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';
  // const undefined = https://image.tmdb.org/t/p/w500//ljIwC5VyEu97IsE58MTQzoUOlhq.jpg

  return (
    <>
      <ul className="moviesList">
        {data.map(({ title, poster_path, overview, popularity }) => (
          <li key={poster_path} className="movieListItem">
            {poster_path && (
              <img width="300" src={baseImgUrl + poster_path} alt={title} />
            )}
            <div className="moviesWrap">
              <h2>{title}</h2>
              <span>{popularity}</span>
              <p className="moviesOverview">{overview}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

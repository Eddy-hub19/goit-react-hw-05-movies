import './Seach.styled.css';
import 'react-toastify/dist/ReactToastify.css';

import { searchMovie } from 'services/api';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    if (query === '') {
      return toast.error('Пуста строка! явно потрібно додати щось ще!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }

    async function fetchData() {
      const response = await searchMovie(query);
      setData(response.results);
    }

    fetchData();

    setQuery('');
  };

  const onChange = evt => {
    setQuery(evt.target.value);
  };

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="formSearchTitle">Search</h2>
        <input
          className="formInput"
          type="text"
          value={query}
          placeholder="Fight Club"
          onChange={onChange}
        />
        <button className="formSubmit" type="sumbit">
          Search 🔍
        </button>
      </form>

      <ul className="moviesList">
        {data.map(({ id, title, poster_path, overview, popularity }) => (
          <li key={id} className="movieListItem">
            <Link to={`${id}`}>
              {poster_path && (
                <img width="300" src={baseImgUrl + poster_path} alt={title} />
              )}
            </Link>
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

import { searchMovie } from 'components/services/api';
import { useEffect, useRef, useState } from 'react';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([{}]);
  // console.log(data);

  const inputEL = useRef(null);

  const handleChange = () => {
    const data = inputEL.current.value;
    if (data === '') {
      console.log('Пуста строка! явно потрібно додати щось ще');
    }
    return setQuery(data);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await searchMovie(query);
      const data = response.results;
      setData(data);
      setQuery('');
    }

    fetchData();
  }, [query]);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
      <div>Search</div>

      <input type="text" ref={inputEL} />
      <button type="sumbit" onClick={handleChange}>
        Search †
      </button>
      <ul style={{listStyle: 'none'}}>
        {data.map(({ id, title, poster_path, overview, popularity }) => (
          <li key={id}>
            <img width="300" src={baseImgUrl + poster_path} alt={title} />
            <div style={{ padding: '40px 10px' }}>
              <h2>{title}</h2>
              <span>{popularity}</span>
              <p>{overview}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

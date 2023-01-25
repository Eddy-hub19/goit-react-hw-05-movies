import './Seach.styled.css';

// import { searchMovie } from 'components/services/api';
// import { useRef, useState } from 'react';
// import { toast } from 'react-toastify';
// import { Movies } from 'Pages/Movies/Movies';

export const Search = ({ handleChange, inputEL }) => {
  // const [query, setQuery] = useState('');
  // const [data, setData] = useState([{}]);

  // const inputEL = useRef(null);

  // const handleChange = e => {
  //   e.preventDefault();
  //   const data = inputEL.current.value;
  //   if (data === '') {
  //     return toast('Пуста строка! явно потрібно додати щось ще!');
  //   }
  //   return setQuery(data);
  // };

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await searchMovie(query);
  //     const data = response.results;
  //     setData(data);
  //   }

  //   fetchData();
  // }, [query]);

  // const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
      <form onSubmit={handleChange}>
        <h2 className="formSearchTitle">Search</h2>
        <input
          className="formInput"
          type="text"
          ref={inputEL}
          placeholder="Fight Club"
        />
        <button className="formSubmit" type="sumbit">
          Search 🔍
        </button>
      </form>

      {/* <ul className="moviesList">
        {data.map(({ id, title, poster_path, overview, popularity }) => (
          <li key={id} className="movieListItem">
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
      </ul> */}
    </>
  );
};

import { getMovies } from 'components/services/api';
import { useEffect, useRef } from 'react';

export const Search = ({ query }) => {
  const inputEL = useRef(null);
  console.log(inputEL);

  const handleChange = () => {
    return console.log(inputEL.current.value);
  };

  useEffect(() => {
    async function fetchData() {
      await getMovies(query);
      console.log(getMovies(query));
    }

    fetchData();
  }, [query]);

  return (
    <>
      <div>Search</div>
      <input onChange={handleChange} type="text" ref={inputEL} />
    </>
  );
};

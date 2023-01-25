// import { Movies } from 'Pages/Movies/Movies';
// import { useSearchParams } from 'react-router-dom';
// import { SearchBox } from './SearchBox';

// export const SearchMovies = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const movieName = searchParams.get('name') ?? '';

//   const updateQueryString = name => {
//     const nextParams = name !== '' ? { name } : {};
//     setSearchParams(nextParams);
//   };
//   return (
//     <>
//       <SearchBox value={movieName} onChange={updateQueryString} />
//       <Movies/>
//     </>
//   );
// };

// // /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице

// import { castMovie } from 'components/services/api';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// export const Cast = () => {
//   const { movieId } = useParams();
//   useEffect(() => {
//     async function fetchData() {
//       const response = await castMovie();
//       const data = response.results;
//       console.log(data);
//     }

//     fetchData();
//   }, []);

//   return <div>Cats {movieId}</div>;
// };

// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице

import { castMovie } from 'components/services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([{}]);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchData() {
      const response = await castMovie(movieId);
      const cast = response.cast;
      setCast(cast);
    }

    fetchData();
  }, [movieId]);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w300/';

  return (
    <ul>
      {cast.map(({ name, character, profile_path }) => (
        <li>
          <img src={baseImgUrl + profile_path} alt="" />
          <h4>{name}</h4>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};

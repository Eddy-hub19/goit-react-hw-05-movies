// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице

import { castMovie } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
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
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          {profile_path && (
            <img src={baseImgUrl + profile_path} alt={profile_path} />
          )}
          <h4>{name}</h4>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;

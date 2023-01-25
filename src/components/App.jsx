import { Route, Routes } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { NotFound } from './NotFound/NotFound';
import { Home } from '../Pages/Home/Home';
import { Movies } from '../Pages/Movies/Movies';
import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

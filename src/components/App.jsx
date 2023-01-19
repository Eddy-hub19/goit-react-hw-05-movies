import { Link, Route, Routes } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { NotFound } from './NotFound/NotFound';
import { Home } from './Pages/Home/Home';
import { Movies } from './Pages/Movies';
import { Reviews } from './Reviews/Reviews';

/* <Container> make to style component
<Header> make to style component */

export const App = () => {
  return (
    <div className="container">
      <div className="header">
        <nav className="nav">
          <Link style={{ paddingRight: '30px' }} to="/" className="active">
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Movies } from './Pages/Movies';

/* <Container> make to style component
<Header> make to style component */

export const App = () => {
  return (
    <div
      style={{
        background: 'gray',
        color: 'white',
        padding: '40px 70px',
      }}
    >
      <nav>
        <Link style={{ paddingRight: '30px' }} to="/" className="active">
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};

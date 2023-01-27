import React from 'react';
import { Search } from 'components/Search/Search';
import { ToastContainer } from 'react-toastify';

const Movies = () => {
  return (
    <>
      <Search />
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default Movies;

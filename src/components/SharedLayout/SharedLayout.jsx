import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: teal;
  }
`;

export const SharedLayout = () => {
  return (
    <div className="container">
      <div className="header">
        <nav className="nav">
          <StyledLink
            style={{ paddingRight: '30px' }}
            to="/"
            className="active"
          >
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

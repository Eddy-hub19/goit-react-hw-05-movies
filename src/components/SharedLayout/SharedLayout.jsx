import { NEW } from 'components/Search/NEW';
import { Search } from 'components/Search/Search';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const SharedLayout = () => {
  return (
    <div className="container">
      <div className="header">
        <nav className="nav">
          <StyledLink style={{ paddingRight: '30px' }} to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <NEW />
    </div>
  );
};

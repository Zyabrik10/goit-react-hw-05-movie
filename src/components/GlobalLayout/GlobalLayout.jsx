import { NavLink, Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { Suspense } from 'react';

import '../../css/header.css';

const StyledLink = styled(NavLink)`
  &.active {
    color: violet;
  }
`;

export default function GlobalLayout() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul className="nav-links-list global-list">
              <li>
                <StyledLink className="nav-link global-link" to="/">
                  Home
                </StyledLink>
              </li>
              <li>
                <StyledLink className="nav-link global-link" to="/movies">
                  Movies
                </StyledLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

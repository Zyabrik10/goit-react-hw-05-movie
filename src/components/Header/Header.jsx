import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledLink = styled(NavLink)`
  &.active {
    color: violet;
  }
`;

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <ul className="nav-links-list global-list">
            <li>
              <StyledLink
                className="nav-link global-link"
                to="/goit-react-hw-05-movie"
              >
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink
                className="nav-link global-link"
                to="/goit-react-hw-05-movie/movies"
              >
                Movies
              </StyledLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

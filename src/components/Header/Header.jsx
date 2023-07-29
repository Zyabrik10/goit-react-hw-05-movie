import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

import header_styles from 'css/header.module.css';
const { nav_links_list } = header_styles;

const StyledLink = styled(NavLink)`
  &.active {
    color: violet;
  }
`;

export default function Header() {
  return (
    <header className={header_styles.header}>
      <div className="container">
        <nav>
          <ul className={`${nav_links_list} global-list`}>
            <li>
              <StyledLink className={`nav-link global-link`} to="/">
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink className={`nav-link global-link`} to="/movies">
                Movies
              </StyledLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

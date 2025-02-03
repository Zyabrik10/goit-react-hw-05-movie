import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(NavLink)`
  position: relative;
  color: var(--color-2);

  &.active {
    color: var(--color-5);
  }

  &::before{
    content: "";
    position: absolute;
    top: 99%;
    left: 0;

    height: 1px;
    width: 0;

    transition: width 0.3s ease;

    background-color: var(--color-5);
  }

  &:hover::before,
  &:focus::before {
    width: 100%;
  }
`;

/**
 * @param
 * navClassName:string -> ".selector1 .selector2 ..."
 * listClassName:string -> ".selector1 .selector2 ..."
 * isInHeader:boolean -> true
 * children: React nodes
 */

export default function Nav({ navClassName = "", listClassName = "", isInHeader = true }) {
  return (
    <nav
      className={`${css['nav']} ${isInHeader ? css['header'] : ''} ${navClassName}`}
      role="navigation"
    >
      <ul className={`${css['list']} ${listClassName}`}>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  navClassName: PropTypes.string,
  listClassName: PropTypes.string,
  isInHeader: PropTypes.bool,
};
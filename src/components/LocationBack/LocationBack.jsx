import { NavLink, useLocation } from 'react-router-dom';
import css from "./LocationBack.module.css";


export default function LocationBack() {
  const location = useLocation();
    
  return (
    <NavLink
      className={css["back"]}
      to={location.state ? location.state.from : '/'}
      state={{ from: location.state ? location.state.from : '/' }}
    >
      <span>&larr;</span> Go Back
    </NavLink>
  );
}

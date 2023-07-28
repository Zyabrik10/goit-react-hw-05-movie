import { NavLink, useLocation } from 'react-router-dom';
import PropsType from 'props-type';

export default function FilmsListItem({ id, title, poster_path }) {
  const location = useLocation();
  const { search, pathname } = location;

  return (
    <li>
      <NavLink
        className="top-films-link global-link"
        to={`/goit-react-hw-05-movie/movies/${id}`}
        state={{ from: pathname + search }}
      >
        {poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
        ) : (
          <div className="poster-placeholder">
            <p className="global-b">No image</p>
          </div>
        )}
        <p className="title global-p">{title}</p>
      </NavLink>
    </li>
  );
}

FilmsListItem.propsType = {
  id: PropsType.string,
  title: PropsType.string,
  poster_path: PropsType.string,
};

import { NavLink, useLocation } from 'react-router-dom';
import PropsType from 'props-type';
import styles from 'css/top-films.module.css';

const { top_films_link, poster_placeholder, title: title_style } = styles;

export default function FilmsListItem({ id, title, poster_path }) {
  const location = useLocation();

  return (
    <li>
      <NavLink
        className={`${top_films_link} global-link`}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt=""
            loading="lazy"
          />
        ) : (
          <div className={poster_placeholder}>
            <p className="global-b">No image</p>
          </div>
        )}
        <p className={`${title_style} global-p`}>{title}</p>
      </NavLink>
    </li>
  );
}

FilmsListItem.propsType = {
  id: PropsType.string,
  title: PropsType.string,
  poster_path: PropsType.string,
};

import css from './FilmItem.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ImageComponent } from 'components';

export default function FilmItem({ obj }) {
  //   adult,
  //   backdrop_path,
  //   genre_ids,
  //   id,
  //   media_type,
  //   original_language,
  //   original_title,
  //   overview,
  //   popularity,
  //   poster_path,
  //   release_date,
  //   title,
  //   video,
  //   vote_average,
  //   vote_count,
  //   original_name,
  //   name,
    // } = obj;
  const {
    id,
    original_title,
    poster_path,
    title,
    original_name,
    backdrop_path,
    name,
  } = obj;


  function showTitle() {
    return title || original_title || name || original_name;
  }

  return (
    <li key={id}>
      <NavLink className={css['top_films_link']} to={`/movies/${id}`}>
        <div className={css['image-block']}>
          <div>
            {poster_path ? (
              <ImageComponent
                src={`https://image.tmdb.org/t/p/w500/${poster_path || backdrop_path}`}
              />
            ) : (
              <p>No image</p>
            )}
          </div>
        </div>

        <div className={css['content']}>
          <p className={css['title']}>{showTitle()}</p>
          <div className={`${css["dec-1"]}`}></div>
          <div className={` ${css["dec-2"]}`}></div>
        </div>
      </NavLink>
    </li>
  );
}

FilmItem.propTypes = {
  obj: PropTypes.object,
};

import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NothingFound from 'components/NothingFound/NothingFound';
import css from './MovieInfo.module.css';
import { ImageComponent } from 'components';

const StyleLink = styled(NavLink)`
  &.active {
    background: var(--color-5);
    color: #eee;
    transition: background-color 0.2s ease;
  }

  &.active:hover,
  &.active:focus{
    background: var(--color-7);
  }
`;

export default function MovieInfo({ film }) {
  const { poster_path, title, original_title, name, original_name, vote_average, overview, id, genres } = film;
  const location = useLocation();

  return (
    <>
      <div className={css["films_info_box"]}>
        <div className={css["film_preview"]}>
          {poster_path ? (
            <ImageComponent
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              
              width="212"
              height="327"
              boxClassName={css[""]}
            />
          ) : (
            <div className={css["empty_image_box"]}>
              <p>No Poster</p>
            </div>
          )}
        </div>

        <div className={css["film_info"]}>
          <h1 className={`${css["film_title"]}`}>
            {(title || original_title || name || original_name) || 'No title'}
          </h1>
          <p className={`${css["film_score"]}`}>
            <span>User score: </span>
            <span className={css["content-text"]}>  
            {vote_average
              ? (vote_average * 10).toFixed(0) + '%'
              : 'No information'}
          </span>
          </p>
          <p className={`${css["film_sec_title"]}`}>Overview</p>
          <p className={`${css["film_desc"]} ${css["content-text"]}`}>
            {overview || 'No overview'}
          </p>
          <p>Genres</p>
          {genres?.length ? (
            <ul className={`${css["film_genres"]}`}>
              {genres.map(({ id, name }) => (
                <li className={`${css["content-text"]}`} key={id}>{name}</li>
              ))}
            </ul>
          ) : (
            <NothingFound message="No genres" align="left" />
          )}
        </div>

      </div>
      <div className={css["add_info_box"]}>
        <p className={`${css["add_info_title"]}`}>Additional information</p>
        <ul className={`${css["add_list"]}`}>
          <li>
            <StyleLink
              className={`${css["add_link"]}`}
              to={`/movies/${id}/cast`}
              state={{ from: location.state ? location.state.from : '/' }}
            >
              Cast
            </StyleLink>
          </li>
          <li>
            <StyleLink
              className={`${css["add_link"]}`}
              to={`/movies/${id}/reviews`}
              state={{ from: location.state ? location.state.from : '/' }}
            >
              Reviews
            </StyleLink>
          </li>
        </ul>
      </div>
    </>
  );
}

MovieInfo.propTypes = {
  film: PropTypes.object,
};

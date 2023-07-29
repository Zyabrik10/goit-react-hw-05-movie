import { NavLink } from 'react-router-dom';
import PropsType from 'props-type';
import { styled } from 'styled-components';
import NothingFound from 'components/NothingFound/NothingFound';
import styles from 'css/movie.module.css';

const {
  add_link,
  films_info_box,
  film_title,
  film_score,
  film_sec_title,
  film_info,
  film_genres,
  add_info_box,
  add_info_title,
  empty_image_box,
  film_preview,
  film_desc,
  add_list,
} = styles;

const StyleLink = styled(NavLink)`
  &.active {
    background: gold;
    color: #111;
  }

  &.active:hover {
    background: ;
  }
`;

export default function MovieInfo({ film }) {
  const { poster_path, title, vote_average, overview, id, genres } = film;
  return (
    <>
      <div className={films_info_box}>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt=""
            className={film_preview}
            width="200"
            height="300"
            loading="lazy"
          />
        ) : (
          <div className={empty_image_box}>
            <p className="global-p">No Poster</p>
          </div>
        )}
        <div className={film_info}>
          <h2 className={`${film_title} global-title`}>
            {title ? title : 'No title'}
          </h2>
          <p className={`${film_score} global-p`}>
            <span>User score: </span>
            {vote_average
              ? (vote_average * 10).toFixed(0) + '%'
              : 'No information'}
          </p>
          <p className={`${film_sec_title} global-p`}>Overview</p>
          <p className={`${film_desc} global-p`}>
            {overview ? overview : 'No overview'}
          </p>
          <p className="film-sec-title global-p">Genres</p>
          {genres && genres.length ? (
            <ul className={`${film_genres} global-list`}>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          ) : (
            <NothingFound message="No ganres" align="left" />
          )}
        </div>
      </div>
      <div className={add_info_box}>
        <p className={`${add_info_title} global-p`}>Adittional information</p>
        <ul className={`${add_list} global-list`}>
          <li>
            <StyleLink
              className={`${add_link} global-link`}
              to={`/movies/${id}/cast`}
            >
              Cast
            </StyleLink>
          </li>
          <li>
            <StyleLink
              className={`${add_link} global-link`}
              to={`/movies/${id}/reviews`}
            >
              Reviews
            </StyleLink>
          </li>
        </ul>
      </div>
    </>
  );
}

MovieInfo.propsType = {
  film: PropsType.object,
};

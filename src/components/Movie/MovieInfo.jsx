import { NavLink } from 'react-router-dom';
import PropsType from 'props-type';
import { styled } from 'styled-components';
import NothingFound from 'components/NothingFound/NothingFound';

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
      <div className="films-info-box">
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt=""
            className="film-preview"
            width="200"
            height="300"
            loading="lazy"
          />
        ) : (
          <div className="empty-image-box">
            <p className="global-p">No Poster</p>
          </div>
        )}
        <div className="film-info">
          <h2 className="film-title global-title">
            {title ? title : 'No title'}
          </h2>
          <p className="film-score global-p">
            <span>User score: </span>
            {vote_average
              ? (vote_average * 10).toFixed(0) + '%'
              : 'No information'}
          </p>
          <p className="film-sec-title global-p">Overview</p>
          <p className="film-desc global-p">
            {overview ? overview : 'No overview'}
          </p>
          <p className="film-sec-title global-p">Genres</p>
          {genres && genres.length ? (
            <ul className="film-genres global-list">
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          ) : (
            <NothingFound message="No ganres" align="left" />
          )}
        </div>
      </div>
      <div className="add-info-box">
        <p className="add-info-title global-p">Adittional information</p>
        <ul className="add-list global-list">
          <li>
            <StyleLink
              className="add-link global-link"
              to={`/goit-react-hw-05-movie/movies/${id}/cast`}
            >
              Cast
            </StyleLink>
          </li>
          <li>
            <StyleLink
              className="add-link global-link"
              to={`/goit-react-hw-05-movie/movies/${id}/reviews`}
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

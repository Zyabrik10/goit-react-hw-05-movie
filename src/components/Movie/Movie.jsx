import { useParams, NavLink, Outlet } from 'react-router-dom';
import { fetchFilmDetails } from '../../js/fetchFilmDetails';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { styled } from 'styled-components';

const StyleLink = styled(NavLink)`
  &.active {
    background: gold;
    color: #111;
  }

  &.active:hover {
    background: #eee;
  }
`;

export const Movie = () => {
  const [film, setFilm] = useState({});
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchFilmDetails(id)
      .then(({ data }) => {
        const { title, overview, genres, poster_path, vote_average } = data;
        setFilm({ title, overview, genres, poster_path, vote_average });
      })
      .catch(e => console.log(e));
  }, [id]);

  return (
    <section>
      <div className="container">
        <NavLink
          className="go-back global-link"
          to={location.state ? location.state.from : '/'}
        >
          <span>&larr;</span> Go Back
        </NavLink>
        <div className="films-info-box">
          {film.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
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
              {film.title ? film.title : 'No title'}
            </h2>
            <p className="film-score global-p">
              <span>User score: </span>
              {film.vote_average
                ? (film.vote_average * 10).toFixed(0) + '%'
                : 'No information'}
            </p>
            <p className="film-sec-title global-p">Overview</p>
            <p className="film-desc global-p">
              {film.overview ? film.overview : 'No overview'}
            </p>
            <p className="film-sec-title global-p">Genres</p>
            <ul className="film-genres global-list">
              {film.genres
                ? film.genres.map(({ id, name }) => <li key={id}>{name}</li>)
                : 'No ganres'}
            </ul>
          </div>
        </div>
        <div className="add-info-box">
          <p className="add-info-title global-p">Adittional information</p>
          <ul className="add-list global-list">
            <li>
              <StyleLink
                className="add-link global-link"
                to={`/movies/${id}/cast`}
              >
                Cast
              </StyleLink>
            </li>
            <li>
              <StyleLink
                className="add-link global-link"
                to={`/movies/${id}/reviews`}
              >
                Reviews
              </StyleLink>
            </li>
          </ul>
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

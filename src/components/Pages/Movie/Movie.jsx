import { useLocation, useParams, NavLink, Outlet } from 'react-router-dom';
import { fetchFilmDetails } from 'js/fetch-films-func';
import { Suspense, useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import MovieInfo from './MovieInfo';
import NothingFound from 'components/NothingFound/NothingFound';

import styles from 'css/movie.module.css';

const { go_back } = styles;

export const Movie = () => {
  const [film, setFilm] = useState({});
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [loadFilms, setLoadFilms] = useState(false);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    setLoadFilms(true);

    fetchFilmDetails(id)
      .then(({ data }) => {
        const { title, overview, genres, poster_path, vote_average } = data;

        if (!data) setIsNothingFound(true);
        else setIsNothingFound(false);

        setFilm({ title, overview, genres, poster_path, vote_average, id });
        setLoadFilms(false);
      })
      .catch(e => {
        console.log(e);
        setIsNothingFound(true);
        setLoadFilms(false);
      });
  }, [id]);

  function showMovieInfo() {
    return isNothingFound ? (
      <NothingFound message="There are no info😢" />
    ) : (
      <MovieInfo film={film} />
    );
  }

  return (
    <section>
      <div className="container">
        <NavLink
          className={`${go_back} global-link`}
          to={location.state ? location.state.from : '/'}
          state={{ from: location.state ? location.state.from : '/' }}
        >
          <span>&larr;</span> Go Back
        </NavLink>
        {loadFilms ? <Loader /> : showMovieInfo()}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

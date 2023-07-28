import { useLocation, useParams, NavLink, Outlet } from 'react-router-dom';
import { fetchFilmDetails } from 'js/fetch-film-functions/fetchFilmDetails';
import { Suspense, useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import MovieInfo from './MovieInfo';
import NothingFound from 'components/NothingFound/NothingFound';

export const Movie = () => {
  const [film, setFilm] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [loadFilms, setLoadFilms] = useState(false);

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

  return (
    <section>
      <div className="container">
        <NavLink
          className="go-back global-link"
          to={location.state ? location.state.from : '/goit-react-hw-05-movie'}
        >
          <span>&larr;</span> Go Back
        </NavLink>
        {loadFilms ? (
          <Loader />
        ) : isNothingFound ? (
          <NothingFound message="There are no info😢" />
        ) : (
          <MovieInfo film={film} />
        )}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

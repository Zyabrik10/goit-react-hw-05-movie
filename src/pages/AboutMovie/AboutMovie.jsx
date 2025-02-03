'use client';

import { Container, LocationBack, Loader, LoadInfo, MovieInfo, Alert } from 'components';
import { filmsAPI } from 'config';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import css from "./AboutMovie.module.css";

export default function AboutMovie() {
  const [film, setFilm] = useState({});
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [loadFilms, setLoadFilms] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoadFilms(true);

    filmsAPI.fetchFilmDetails(id)
      .then(({ data }) => {
        if (!data) setIsNothingFound(true);
        else setIsNothingFound(false);

        setFilm(data);
        setLoadFilms(false);
      })
      .catch(e => {
        console.log(e);
        setIsNothingFound(true);
        setLoadFilms(false);
      });
  }, [id]);

  return (
    <>
      <Alert type="warning" message='The outside REST API is used and some times the movie that is loaded can be different from what you chose'/>
      <Container type="section" className={css["section"]}>
        <Container>
          <LocationBack />
          {/* Why  `() => <MovieInfo film={film}/>` - because we pass then a Component and not its result (Otherwise React will give an error)*/}
          {/* renderComponent - name is very important. It has to start as render and then be called as function */}
          <LoadInfo toLoad={loadFilms} isFound={isNothingFound} renderComponent={() => <MovieInfo film={film}/>} message="There are no info😢" />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Container>
    </>
  );
}

import { useState, useEffect } from 'react';
import { fetchTopFilms } from 'js/fetch-film-functions/fetchTopFilms';
import { FilmsList } from '../FilmsList/FilmsList';
import NothingFound from 'components/NothingFound/NothingFound';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
  const [topFilms, setTopFilms] = useState([]);
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [loadFilms, setLoadFilms] = useState(false);

  useEffect(() => {
    setLoadFilms(true);

    fetchTopFilms()
      .then(({ data }) => {
        const { results } = data;

        if (results.length === 0) setIsNothingFound(true);
        else setIsNothingFound(false);

        setTopFilms(results);
        setLoadFilms(false);
      })
      .catch(e => {
        console.log(e);
        setLoadFilms(false);
        setIsNothingFound(true);
      });
  }, []);

  return (
    <section>
      <div className="container">
        <h2 className="sec-title global-title">Trending today</h2>
        {loadFilms ? (
          <Loader />
        ) : isNothingFound ? (
          <NothingFound message="Nothing found😢" />
        ) : (
          <FilmsList films={topFilms} />
        )}
      </div>
    </section>
  );
};

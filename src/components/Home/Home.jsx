import { useState, useEffect } from 'react';
import { fetchTopFilms } from 'js/fetch-films-func';
import { Loader } from 'components/Loader/Loader';
import NothingFound from 'components/NothingFound/NothingFound';
import { FilmsList } from 'components/FilmsList/FilmsList';

import styles from 'css/section.module.css';

const { sec_title } = styles;

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

  function showFilms() {
    return isNothingFound ? (
      <NothingFound message="Nothing found😢" />
    ) : (
      <FilmsList films={topFilms} />
    );
  }

  return (
    <section>
      <div className="container">
        <h2 className={`${sec_title} global-title`}>Trending today</h2>
        {loadFilms ? <Loader /> : showFilms()}
      </div>
    </section>
  );
};

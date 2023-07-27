import { useState, useEffect } from 'react';
import { fetchTopFilms } from '../../js/fetchTopFilms';
import { FilmsList } from '../FilmsList/FilmsList';

export const Home = () => {
  const [topFilms, setTopFilms] = useState([]);

  useEffect(() => {
    fetchTopFilms()
      .then(({ data }) => {
        const { results } = data;
        const films = results.map(({ id, title, name, poster_path }) => {
          return {
            title: title ? title : name,
            id,
            poster_path,
          };
        });

        setTopFilms(films);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <section>
      <div className="container">
        <h2 className="sec-title global-title">Trending today</h2>
        <FilmsList films={topFilms} />
      </div>
    </section>
  );
};

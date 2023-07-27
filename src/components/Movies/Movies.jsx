import { useState, useEffect } from 'react';
import { fetchFilms } from 'js/fetchFilms';
import { useSearchParams } from 'react-router-dom';
import { FilmsList } from '../FilmsList/FilmsList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    setQuery(query ? query : '');
  }, [searchParams]);

  useEffect(() => {
    if (query === '') return;

    fetchFilms(query)
      .then(({ data }) => {
        const { results } = data;
        setFilms(results);
      })
      .catch(e => console.log(e));
  }, [query]);

  function formHandle(e) {
    e.preventDefault();

    const query = e.currentTarget.query.value;
    setQuery(query);
    setParams({ query });
  }

  return (
    <section>
      <div className="container">
        <form
          className="movies-form"
          onSubmit={formHandle}
          action=""
          autoComplete="off"
        >
          <input type="text" name="query" placeholder="Batman..." />
          <button className="global-button">search</button>
        </form>
        <FilmsList films={films} />
      </div>
    </section>
  );
};

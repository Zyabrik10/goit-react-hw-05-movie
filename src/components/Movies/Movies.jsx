import { useState, useEffect } from 'react';
import { fetchFilms } from 'js/fetch-film-functions/fetchFilms';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { showFilms } from 'js/fetch-film-functions/showFilms';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setParams] = useSearchParams();
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [loadFilms, setLoadFilms] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query');
    setQuery(query ? query : '');
  }, [searchParams]);

  useEffect(() => {
    if (query === '') return;

    setLoadFilms(true);

    fetchFilms(query)
      .then(({ data }) => {
        const { results } = data;

        if (results.length === 0) setIsNothingFound(true);
        else setIsNothingFound(false);

        setFilms(results);
        setLoadFilms(false);
      })
      .catch(e => {
        console.log(e);
        setLoadFilms(false);
        setIsNothingFound(true);
      });
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
        {loadFilms ? <Loader /> : showFilms(isNothingFound, films)}
      </div>
    </section>
  );
};

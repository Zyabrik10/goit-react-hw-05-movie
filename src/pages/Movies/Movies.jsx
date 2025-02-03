import { Container, FilmsList, LoadInfo,SearchMovieForm } from 'components';
import { filmsAPI } from 'config';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import loadElement from 'utility/loadElement';
import css from "./Movies.module.css";

export default function Movies() {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setParams] = useSearchParams();
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [loadFilms, setLoadFilms] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query');
    setQuery(query || '');
  }, [searchParams]);

  useEffect(() => {
    if (query === '') return;
    else {
      loadElement(
        setLoadFilms,
        setIsNothingFound,
        filmsAPI.fetchFilms.bind(filmsAPI),
        query,
        setFilms,
        'results'
      );
    }
  }, [query]);

  return (
    <Container type="section">
      <Container>
        <SearchMovieForm formClassName={css["form"]} setParams={setParams} setQuery={setQuery} />
        <LoadInfo
          toLoad={loadFilms}
          isFound={isNothingFound}
          renderComponent={() => <FilmsList films={films} />}
          message={`There are movies by ${query} name😢`}
        />
      </Container>
    </Container>
  );
}

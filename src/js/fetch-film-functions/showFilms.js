import NothingFound from 'components/NothingFound/NothingFound';
import { FilmsList } from 'components/FilmsList/FilmsList';

export function showFilms(state, films) {
  return state ? (
    <NothingFound message="Nothing found😢" />
  ) : (
    <FilmsList films={films} />
  );
}

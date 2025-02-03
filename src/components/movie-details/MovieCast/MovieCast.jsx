import { useParams } from 'react-router-dom';
import MovieCastList from './MovieCastList/MovieCastList';
import { filmsAPI } from 'config';
import { LoadInfo } from 'components';
import { useLoadElement } from 'hooks';

const func = filmsAPI.fetchFilmCredits.bind(filmsAPI);

export default function MovieCast() {
  const { id } = useParams();
  const [credits, isNothingFound, loadFilms] = useLoadElement(func, "cast", id);

  return (
    <LoadInfo
      toLoad={loadFilms}
      isFound={isNothingFound}
      renderComponent={() => <MovieCastList credits={credits} />}
      message="There are no info😢"
    />
  );
}

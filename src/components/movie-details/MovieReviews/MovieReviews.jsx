import { useParams } from 'react-router-dom';
import MovieReviewsList from './MovieReviewsList/MovieReviewsList';
import { filmsAPI } from 'config';
import { LoadInfo } from 'components';
import { useLoadElement } from 'hooks';

const func = filmsAPI.fetchFilmReviews.bind(filmsAPI);

export default function MovieReviews() {
  const { id } = useParams();
  const [reviews, isNothingFound, loadFilms] = useLoadElement(func, "results", id);

  return (
    <LoadInfo
      toLoad={loadFilms}
      isFound={isNothingFound}
      renderComponent={() => <MovieReviewsList reviews={reviews} />}
      message="There are no info😢"
    />
  );
}

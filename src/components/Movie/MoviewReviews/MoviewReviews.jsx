import { useParams } from 'react-router-dom';
import { fetchFilmReviews } from 'js/fetch-films-func';
import { useEffect, useState } from 'react';
import NothingFound from 'components/NothingFound/NothingFound';
import { Loader } from 'components/Loader/Loader';
import MovieReviewsList from './MovieReviewsList/MovieReviewsList';

export default function MovieReviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [loadFilms, setLoadFilms] = useState(false);

  useEffect(() => {
    setLoadFilms(true);

    fetchFilmReviews(id)
      .then(({ data }) => {
        const { results } = data;

        if (results.length === 0) setIsNothingFound(true);
        else setIsNothingFound(false);

        setReviews(results);
        setLoadFilms(false);
      })
      .catch(e => {
        console.log(e);
        setLoadFilms(false);
        setIsNothingFound(true);
      });
  }, [id]);

  function showCredits() {
    return isNothingFound ? (
      <NothingFound message="There is no info😢" />
    ) : (
      <MovieReviewsList reviews={reviews} />
    );
  }

  return loadFilms ? <Loader /> : showCredits();
}

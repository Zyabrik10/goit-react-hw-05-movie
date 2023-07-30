import { useParams } from 'react-router-dom';
import { fetchFilmCreadits } from 'js/fetch-films-func';
import { useEffect, useState } from 'react';
import NothingFound from 'components/NothingFound/NothingFound';
import { Loader } from 'components/Loader/Loader';
import MovieCastList from './MovieCastList/MovieCastList';

export default function MovieCast() {
  const { id } = useParams();
  const [credits, setCredits] = useState([]);
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [loadFilms, setLoadFilms] = useState(false);

  useEffect(() => {
    setLoadFilms(true);

    fetchFilmCreadits(id)
      .then(({ data }) => {
        const { cast } = data;

        if (!cast || !cast.length) setIsNothingFound(true);
        else setIsNothingFound(false);

        setCredits(cast);
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
      <MovieCastList credits={credits} />
    );
  }

  return loadFilms ? <Loader /> : showCredits();
}

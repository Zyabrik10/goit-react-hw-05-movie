import { useParams } from 'react-router-dom';
import { fetchFilmCreadits } from 'js/fetchFilmCredits';
import { useEffect, useState } from 'react';
import MovieCastItem from './MovieCastItem';
import { nanoid } from 'nanoid';

export default function MovieCast() {
  const { id } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchFilmCreadits(id)
      .then(({ data }) => {
        const { cast } = data;
        setCredits(cast);
      })
      .catch(e => console.log);
  }, [id]);

  return (
    <ul className="cast-list flex-container global-list">
      {credits.length ? (
        credits.map(({ profile_path, name, character }) => (
          <MovieCastItem
            key={nanoid()}
            profile_path={profile_path}
            name={name}
            character={character}
          />
        ))
      ) : (
        <p className="global-p">There are no cast</p>
      )}
    </ul>
  );
}

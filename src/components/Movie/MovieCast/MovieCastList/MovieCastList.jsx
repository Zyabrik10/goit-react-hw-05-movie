import PropsType from 'props-type';
import MovieCastItem from './MovieCastItem/MovieCastItem';
import { nanoid } from 'nanoid';

import styles from 'css/movie.module.css';

const { cast_list } = styles;

export default function MovieCastList({ credits }) {
  return (
    <ul className={`${cast_list} flex-container global-list`}>
      {credits.map(({ profile_path, name, character }) => (
        <MovieCastItem
          key={nanoid()}
          profile_path={profile_path}
          name={name}
          character={character}
        />
      ))}
    </ul>
  );
}

MovieCastList.propsType = {
  credits: PropsType.array,
};

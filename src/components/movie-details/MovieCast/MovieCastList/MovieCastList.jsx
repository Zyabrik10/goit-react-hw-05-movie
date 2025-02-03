import PropTypes from 'prop-types';
import MovieCastItem from '../MovieCastItem/MovieCastItem';
import { nanoid } from 'nanoid';

import css from './MovieCastList.module.css';
import { Container } from 'components';

export default function MovieCastList({ credits }) {
  return (
    <Container type='flex' className={css["cast_list"]}>
      {credits?.length
        ? credits.map(({ profile_path, name, character }) => (
            <MovieCastItem
              key={nanoid()}
              profile_path={profile_path}
              name={name}
              character={character}
            />
          ))
        : <></>}
    </Container>
  );
}

MovieCastList.propTypes = {
  credits: PropTypes.array,
};

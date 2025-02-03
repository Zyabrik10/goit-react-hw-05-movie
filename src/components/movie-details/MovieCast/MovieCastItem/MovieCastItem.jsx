import PropTypes from 'prop-types';
import css from './MovieCastItem.module.css';
import { ImageComponent } from 'components';

export default function MovieCastItem({ profile_path, name, character }) {
  return (
    <li>
      <div className={css["actor_preview"]}>
        {profile_path ? (
          <ImageComponent
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          />
        ) : (
          <p>No image</p>
        )}
      </div>

      <p>{name}</p>
      <p>{character}</p>
    </li>
  );
}

MovieCastItem.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
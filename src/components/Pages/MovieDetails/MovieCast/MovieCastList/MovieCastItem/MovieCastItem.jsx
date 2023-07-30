import PropsType from 'props-type';
import styles from 'css/movie.module.css';

const { actor_preview } = styles;

export default function MovieCastItem({ profile_path, name, character }) {
  return (
    <li>
      {profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt=""
          loading="lazy"
          className={actor_preview}
        />
      ) : (
        <div className={actor_preview}>No image</div>
      )}

      <p className="global-p">{name}</p>
      <p className="global-p">{character}</p>
    </li>
  );
}

MovieCastItem.propsType = {
  profile_path: PropsType.string,
  name: PropsType.string,
  character: PropsType.string,
};

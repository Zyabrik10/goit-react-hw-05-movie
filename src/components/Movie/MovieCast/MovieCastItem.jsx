import PropsType from 'props-type';

export default function MovieCastItem({ profile_path, name, character }) {
  return (
    <li>
      {profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt=""
          loading="lazy"
          className="actor-preview"
        />
      ) : (
        <div className="actor-preview">No image</div>
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

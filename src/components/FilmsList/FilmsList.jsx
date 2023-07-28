import FilmsListItem from './FilmsListItem';
import PropsType from 'props-type';

export const FilmsList = ({ films }) => {
  return (
    <ul className="flex-container top-films-list global-list">
      {films
        ? films.map(({ id, title, poster_path, backdrop_path }) => (
            <FilmsListItem
              key={id}
              id={id}
              title={title}
              poster_path={poster_path ? poster_path : backdrop_path}
            />
          ))
        : null}
    </ul>
  );
};

FilmsList.propsType = {
  films: PropsType.array,
};

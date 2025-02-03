import { Container, FilmItem } from 'components';
import { nanoid } from 'nanoid';
import css from "./FilmsList.module.css";
import PropTypes from 'prop-types';

export default function FilmsList({ films = [] }) {
  return (
    <Container className={css["film-list"]} type="flex">
      {films?.map(
        (obj) => {
          return (
            <FilmItem key={nanoid()} obj={obj} />
          );
        }
      )}
    </Container>
  );
}

FilmsList.propTypes = {
  films: PropTypes.array
}
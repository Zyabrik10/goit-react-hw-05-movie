import css from './NothingFound.module.css';
import PropTypes from 'prop-types';

export default function NothingFound({ message, align = 'center' }) {
  return (
    <div
      className={css["nothing_found_box"]}
      style={{
        textAlign: align,
      }}
    >
      <p>{message}</p>
    </div>
  );
}

NothingFound.propTypes = {
    message: PropTypes.string,
    align: PropTypes.string
};
import PropTypes from 'prop-types';
import css from './Alert.module.css';
import { Container } from 'components';

export default function Alert({ message, type = 'info' }) {
  return (
    <Container type="section" className={css['section']}>
      <Container>
        <div className={`${css['box']} ${css[type]}`}>
          <p className={css['text']}>{message}</p>
        </div>
      </Container>
    </Container>
  );
}

Alert.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['warning', 'error', 'info']),
};

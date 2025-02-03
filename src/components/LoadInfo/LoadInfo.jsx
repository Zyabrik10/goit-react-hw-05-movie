import { Loader, NothingFound } from 'components';
import PropTypes from 'prop-types';

export default function LoadInfo({
  toLoad,
  renderComponent,
  isFound,
  message = "",
}) {
  function showInfo() {
    return isFound ? (
      <NothingFound message={message} />
    ) : (
      renderComponent()
    );
  }
  
  return toLoad ? <Loader /> : showInfo();
}

LoadInfo.propTypes = {
  renderComponent: PropTypes.func,
  isFound: PropTypes.bool,
  message: PropTypes.string,
  toLoad: PropTypes.bool,
};

import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import MovieReviewsItem from '../MovieReviewsItem/MovieReviewsItem';
import css from './MovieReviewsList.module.css';

export default function MovieReviewsList({ reviews }) {
  return (
    <ul className={`${css['reviews-list']}`}>
      {reviews?.length
        ? reviews?.map(({ author, content }) => (
            <MovieReviewsItem
              key={nanoid()}
              author={author}
              content={content}
            />
          ))
        : null}
    </ul>
  );
}

MovieReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
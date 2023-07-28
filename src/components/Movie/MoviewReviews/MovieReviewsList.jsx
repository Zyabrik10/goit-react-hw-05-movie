import PropsType from 'props-type';
import { nanoid } from 'nanoid';
import MovieReviewsItem from './MoviewReviewsItem';

export default function MovieReviewsList({ reviews }) {
  return (
    <ul className="reviews-list global-list">
      {reviews.map(({ author, content }) => (
        <MovieReviewsItem key={nanoid()} author={author} content={content} />
      ))}
    </ul>
  );
}

MovieReviewsList.propsType = {
  credits: PropsType.array,
};

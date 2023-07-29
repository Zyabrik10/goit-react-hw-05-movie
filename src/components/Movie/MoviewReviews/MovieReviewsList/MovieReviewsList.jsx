import PropsType from 'props-type';
import { nanoid } from 'nanoid';
import MovieReviewsItem from './MovieReviewsItem/MoviewReviewsItem';
import styles from 'css/movie.module.css';

const { reviews_list } = styles;
export default function MovieReviewsList({ reviews }) {
  return (
    <ul className={`${reviews_list} global-list`}>
      {reviews.map(({ author, content }) => (
        <MovieReviewsItem key={nanoid()} author={author} content={content} />
      ))}
    </ul>
  );
}

MovieReviewsList.propsType = {
  credits: PropsType.array,
};

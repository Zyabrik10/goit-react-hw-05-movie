import PropsType from 'props-type';
import styles from 'css/movie.module.css';

const { review_name, review_text } = styles;
export default function MovieReviewsItem({ author, content }) {
  return (
    <li>
      <p className={`${review_name} global-p`}>{author}</p>
      <p className={`${review_text} global-p`}>{content}</p>
    </li>
  );
}

MovieReviewsItem.propsType = {
  author: PropsType.string,
  content: PropsType.string,
};

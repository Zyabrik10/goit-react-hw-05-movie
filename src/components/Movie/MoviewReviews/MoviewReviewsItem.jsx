import PropsType from 'props-type';

export default function MovieReviewsItem({ author, content }) {
  return (
    <li>
      <p className="review-name global-p">{author}</p>
      <p className="review-text global-p">{content}</p>
    </li>
  );
}

MovieReviewsItem.propsType = {
  author: PropsType.string,
  content: PropsType.string,
};

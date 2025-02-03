import { useMemo } from "react";
import css from './MovieReviewsItem.module.css';
import DOMPurify from 'dompurify';
import PropTypes from "prop-types";


export default function MovieReviewsItem({ author, content }) {
  const sanitizedContent = useMemo(() => DOMPurify.sanitize(content), [content]);
  
  return (
    <li className={css["item"]}>
      <p className={css['review-name']}>{author}</p>
      <p dangerouslySetInnerHTML={{ __html: sanitizedContent }} className={css['review-text']}></p>
    </li>
  );
}

MovieReviewsItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
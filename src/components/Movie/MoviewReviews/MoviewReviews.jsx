import { useParams } from 'react-router-dom';
import { fetchFilmReviews } from '../../../js/fetchFilmReviews';
import { useEffect, useState } from 'react';
import MovieReviewsItem from './MoviewReviewsItem';
import { nanoid } from 'nanoid';

export default function MovieReviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchFilmReviews(id)
      .then(({ data }) => {
        const { results } = data;
        setReviews(results);
      })
      .catch(console.log);
  }, [id]);

  return (
    <ul className="reviews-list global-list">
      {reviews.length ? (
        reviews.map(({ author, content }) => (
          <MovieReviewsItem key={nanoid()} author={author} content={content} />
        ))
      ) : (
        <p className="global-p">There are no reviews</p>
      )}
    </ul>
  );
}

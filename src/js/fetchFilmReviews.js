import { api_key } from 'api_key';
import axios from 'axios';

export const fetchFilmReviews = async movie_id => {
  const credits = await axios(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${api_key}`
  );

  return credits;
};

import { api_key } from 'api_key';
import axios from 'axios';

export const fetchFilmDetails = async id => {
  const data = await axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  );

  return data;
};

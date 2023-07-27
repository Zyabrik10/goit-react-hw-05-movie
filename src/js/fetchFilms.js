import { api_key } from 'api_key';
import axios from 'axios';

export const fetchFilms = async query => {
  const credits = await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
  );

  return credits;
};

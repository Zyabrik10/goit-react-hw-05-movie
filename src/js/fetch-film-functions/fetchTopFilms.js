import { api_key } from 'api_key';
import axios from 'axios';

export const fetchTopFilms = async path => {
  const data = await axios(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
  );

  return data;
};

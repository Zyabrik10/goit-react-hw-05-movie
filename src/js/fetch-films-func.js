import { api_key } from 'api_key';
import axios from 'axios';

export const fetchFilmCreadits = async movie_id => {
  const credits = await axios(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${api_key}`
  );

  return credits;
};

export const fetchFilmDetails = async id => {
  const data = await axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  );

  return data;
};

export const fetchFilmReviews = async movie_id => {
  const credits = await axios(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${api_key}`
  );

  return credits;
};

export const fetchFilms = async query => {
  const credits = await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
  );

  return credits;
};

export const fetchTopFilms = async path => {
  const data = await axios(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
  );

  return data;
};

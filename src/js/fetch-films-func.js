import axios from 'axios';

const API_KEY = '20e9251309998a4e0856c5b444d4828a';

export const fetchFilmCreadits = async movie_id => {
  const credits = await axios(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`
  );

  return credits;
};

export const fetchFilmDetails = async id => {
  const data = await axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );

  return data;
};

export const fetchFilmReviews = async movie_id => {
  const credits = await axios(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}`
  );

  return credits;
};

export const fetchFilms = async query => {
  const credits = await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );

  return credits;
};

export const fetchTopFilms = async path => {
  const data = await axios(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );

  return data;
};

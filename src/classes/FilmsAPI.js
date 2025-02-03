import API from './API';

export default class FilmsAPI extends API {
  constructor() {
    super({
      baseURL: 'https://api.themoviedb.org/3/',
      token: '20e9251309998a4e0856c5b444d4828a',
    });
  }


  fetchFilmCredits(movie_id) {
    return this.fetch(`movie/${movie_id}/credits`, {api_key: this.token});
  };

  fetchFilmDetails(id){
    return this.fetch(`movie/${id}`, {
      api_key: this.token,
    });
  };

  fetchFilmReviews(movie_id) {
    return this.fetch(
      `movie/${movie_id}/reviews`,
      { api_key: this.token }
    );
  };

  fetchFilms(query) {
    return this.fetch(`search/movie`, {
      query,
      api_key: this.token,
    });
  };

  fetchTopFilms() {
    return this.fetch(`trending/all/day`, {
      api_key: this.token,
    });
  };
}

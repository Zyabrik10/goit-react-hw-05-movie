import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { Movie } from './Movie/Movie';
import { lazy } from 'react';

const GlobalComponent = lazy(() => import('./GlobalLayout/GlobalLayout'));
const MovieCastComponent = lazy(() => import('./Movie/MovieCast/MovieCast'));
const MovieReviewsComponent = lazy(() =>
  import('./Movie/MoviewReviews/MoviewReviews')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<GlobalComponent />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id/" element={<Movie />}>
          <Route path="cast" element={<MovieCastComponent />} />
          <Route path="reviews" element={<MovieReviewsComponent />} />
        </Route>
      </Route>
    </Routes>
  );
};
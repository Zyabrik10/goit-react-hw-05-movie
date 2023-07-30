import { Routes, Route } from 'react-router-dom';
import { Movies } from './Pages/Movies/Movies';
import { Movie } from './Pages/MovieDetails/Movie';
import { lazy } from 'react';

const GlobalComponent = lazy(() => import('./GlobalLayout/GlobalLayout'));
const Home = lazy(() => import('./Pages/Home/Home'));
const MovieCastComponent = lazy(() =>
  import('./Pages/MovieDetails/MovieCast/MovieCast')
);
const MovieReviewsComponent = lazy(() =>
  import('./Pages/MovieDetails/MoviewReviews/MoviewReviews')
);
const PageNotFoundComponent = lazy(() =>
  import('./Pages/PageNotFound/PageNotFound')
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
      <Route path="*" element={<PageNotFoundComponent />} />
    </Routes>
  );
};

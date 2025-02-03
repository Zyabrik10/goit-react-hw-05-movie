import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';

import "./css/scroll.css";

const MainLayout = lazy(() => import('./layouts/MainLayout/MainLayout'));
const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieCast = lazy(() => import('./components/movie-details/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/movie-details/MovieReviews/MovieReviews'));
const AboutMovie = lazy(() => import('./pages/AboutMovie/AboutMovie'));
const PageNotFoundComponent = lazy(() => import('./pages/PageNotFound/PageNotFound'));

export const App = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      document.body.style.setProperty('--scroll', window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight));
    }, false);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<AboutMovie />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFoundComponent />} />
    </Routes>
  );
};

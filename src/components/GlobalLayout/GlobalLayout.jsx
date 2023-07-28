import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';

export default function GlobalLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

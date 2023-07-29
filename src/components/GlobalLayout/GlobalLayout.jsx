import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';
import { Loader } from 'components/Loader/Loader';
import styles from 'css/main.module.css';

const { main } = styles;

export default function GlobalLayout() {
  return (
    <>
      <Header />
      <main className={main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

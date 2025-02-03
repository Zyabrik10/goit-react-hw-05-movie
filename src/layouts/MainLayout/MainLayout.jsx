import { Header, Footer, Loader } from 'components/index';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div style={{
          paddingTop: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Loader />
        </div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: 'green',
              color: '#fff',
            },
          },
          error: {
            style: {
              background: 'red',
              color: '#fff',
            },
          },
        }}
      />
    </>
  );
};

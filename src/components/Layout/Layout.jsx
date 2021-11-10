import React from 'react';
import { Footer, Header } from '..';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;

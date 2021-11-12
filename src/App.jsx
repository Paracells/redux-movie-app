import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Layout, MovieDetails, PageNotFound } from './components';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/movie/:imdbID' element={<MovieDetails />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

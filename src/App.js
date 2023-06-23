import React from 'react';
import {  Route, Routes } from 'react-router-dom';


import { BrowserRouter } from 'react-router-dom';
import AppMainPage from './AppRouter';
const AppRouter = () => {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route exact path="/callback" element={<AppMainPage/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
};

export default AppRouter;

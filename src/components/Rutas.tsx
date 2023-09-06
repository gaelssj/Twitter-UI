import Feed from '../pages/Feed';
import Messages from '../pages/Messages';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Rutas: React.FC = () => {
  return (
    <Routes>
      <Route Component={Feed} path="/" />
      <Route Component={Messages} path="/messages" />
    </Routes>
  );
};

export default Rutas;

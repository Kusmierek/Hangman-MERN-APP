import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import Categories from './components/Categories';
import Game from './components/Game';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <div className="App bg-gradient-to-r from-purple-200 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;

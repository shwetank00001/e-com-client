import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import './app.css'; 

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";

import Cart from "./components/Cart";
import Home from "./components/Home";

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
    </div>

  );
}

export default App;

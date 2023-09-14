import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const count = 0;

  return (
    <div className="navbar">
      <Link to={'/'} className="navbar-button">
        <button>Home</button>
      </Link>
      <Link to={'/cart'} className="navbar-button">
        <button>Cart</button>
      </Link>
      <h3 className="cart-count">Total Cart Items: {count}</h3>
    </div>
  );
};

export default Navbar;

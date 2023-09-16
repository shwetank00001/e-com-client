import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const count = useSelector( (state) => state.cart)

  return (
    <div className="navbar">
      <Link to={'/'} className="navbar-button">
        <button>Home</button>
      </Link>
      <Link to={'/cart'} className="navbar-button">
        <button>Cart</button>
      </Link>
      <h4 className='cart-count'>Cart: {count.length}</h4>
    </div>
  );
};

export default Navbar;

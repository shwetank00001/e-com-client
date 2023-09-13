import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <Link to={'/'}> <button>Home</button></Link>
       <Link to={'/cart'}> <button>Cart</button></Link>

        <h3>Cart : {0}</h3>
    </div>
  )
}

export default Navbar
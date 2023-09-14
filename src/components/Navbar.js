import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const count = 0
  return (
    <div>
       <Link to={'/'}> <button>Home</button></Link>
       <Link to={'/cart'}> <button>Cart</button></Link>

        <h3>Cart : {count}</h3>
    </div>
  )
}

export default Navbar
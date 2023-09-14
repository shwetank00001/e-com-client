import React from 'react'
import NewItem from './NewItem'
import Products from './Products'

const Home = () => {
  return (
    <div>
        <h2>List of items are</h2>

        <div>
          <NewItem />
        </div>
        <hr/> 
        <hr/> 
        <div>
          <Products />
        </div>
    </div>
  )
}

export default Home
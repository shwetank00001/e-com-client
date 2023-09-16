import React from 'react';
import NewItem from './NewItem';
import Products from './Products';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <h1 className="header-title">List of Items</h1>
      </div>

      <div className="main-content">
        <div className="sidebar">
          <h2 className="sidebar-heading">Add New Item</h2>
          <NewItem />
        </div>

        <div className="content">
          <h2 className="content-heading">Popular Items</h2>
          <div className="products">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

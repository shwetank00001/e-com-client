import React from 'react';
import NewItem from './NewItem';
import Products from './Products';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-heading">List of items are</h2>

      <div className="subsection">
        <NewItem />
      </div>

      <div className="divider"></div>

      <div className="subsection">
        <div className="discord-card">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Products.css' 

const Products = () => {
  const [data, setData] = useState([]);

  async function showData() {
    try {
      const result = await axios.get('http://localhost:5000/items')
      setData(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    showData()
  }, [])

  const ele = data.map(function (item) {
    return (
      <div key={item.id} className="product-item">
        <h4 className="product-title">{item.title}</h4>
        <p className="product-description">{item.description}</p>
        <img src={item.selectedFile} alt={item.title} className="product-image" />
        <button className='product-button'>Add to cart</button>
      </div>
    );
  });

  return (
    <div className="products-container">
      <h2>The Products are</h2>
      {ele}
    </div>
  );
};

export default Products;

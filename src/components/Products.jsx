import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Products.css' 
import { useDispatch } from 'react-redux'
import { add } from '../reducer/cartSlice';


const Products = () => {


  const [data, setData] = useState([]);
  const [error, setError] = useState(null)

  const dispatch = useDispatch()

  async function showData() {
    try {
      const result = await axios.get('http://localhost:5000/items')
      setData(result.data)
    } catch (error) {
      setError(error)
      console.log(error)
    } 
  }

  useEffect(() => {
    showData()
  }, [])


  if(error){
    return <div>{error.message}</div>
  }


  function handleAddToCart(item) {
    dispatch(add(item));
    console.log(item)
  }

 async function handleDelete(item){
    try {
      await fetch(`http://localhost:5000/items/${item._id}`
      ,{method: "DELETE"})
    } catch (error) {
      
    }
  }
  const ele = data.map(function (item) {
    return (
      <div key={item._id} className="product-item">
        <h4 className="product-title">{item.title}</h4>
        <p className="product-description">{item.description}</p>
        <img src={item.selectedFile} alt={item.title} className="product-image" />

        <button onClick={() => handleAddToCart(JSON.stringify(item))} className='product-button'>Add to cart</button>

        <button onClick={() => handleDelete(item)}>Delete Product</button>

        <h4>{item._id}</h4>
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

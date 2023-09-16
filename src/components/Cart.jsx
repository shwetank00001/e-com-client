import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../reducer/cartSlice';
import './Cart.css'; // Import your custom CSS file

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  function handleRemove(_id) {
    dispatch(remove(_id));
  }

  const ele = products.map(function (item) {
    console.log("Mapped Data is: ", item)
    return (
      <div key={item._id} className="cart-item">
        <h3 className="item-title">{item.title}</h3>
        <p className="item-description">{item.description}</p>
        <img src={item.selectedFile} alt={item.title} className="item-selectedFile" />
        <button onClick={() => handleRemove(item.id)} className="remove-button">
          Remove
        </button>
      </div>
    );
  });

  return (
    <div className="cart-container">
      <h3 className="cart-title">Your Cart</h3>
      {ele}
    </div>
  );
};

export default Cart;

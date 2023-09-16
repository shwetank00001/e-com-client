import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { remove } from '../reducer/cartSlice'

const Cart = () => {

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)

  function handleRemove(_id){
    dispatch(remove(_id))
  }

  const ele = cartItems.map(function(item, index){
    return(
      <div key={item._id}>
        <h3>{item.title}</h3>
        <h3>{item.description}</h3>
        <h3>{item.selectedFile}</h3>
        <button onClick={() => (handleRemove(item.id))}>Remove</button>
      </div>
    )
  })
  return (
    <div>
        <h3>The cart item is</h3>
        {ele}
        <div>
        </div>
    </div>
  )
}

export default Cart
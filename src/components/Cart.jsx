import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { remove } from '../reducer/cartSlice'

const Cart = () => {

  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart)

  console.log(products)

  function handleRemove(_id){
    dispatch(remove(_id))
  }

  const ele = products.map(function(item){
    console.log("Item being mapped:", item);
    return(
      <div key={item._id}>
        <h3>{item.title}</h3>
        <h3>{item.description}</h3>
        <h3>{item.selectedFile}</h3>
        <button onClick={() => (handleRemove(item.id))}>Remove</button>
      </div>
    )
  })

  console.log("Rendering Cart component")
  return (
    <div>
        <h3>The cart item is</h3>
          
        <div>
          {ele}
        </div>
    </div>
  )
}

export default Cart
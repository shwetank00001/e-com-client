import { combineReducers } from "redux";

import item from './item'
import cartSlice from "./cartSlice";

export default combineReducers({
    item : item,
    cart: cartSlice
    
})
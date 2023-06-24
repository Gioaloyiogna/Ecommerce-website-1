import axios from "axios"
import { CART_ADD_ITEM } from "../constants/CartConstants.js"


export const addTocart=(id,qty)=>async(dispatch,getState)=>{
    const {data}=await axios.get(`api/products/${id}`)
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            productID:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            countItems:data.countItems,
            quantity:qty
        }
    })
    localStorage.setItem("cartItems",JSON.stringify(getState.cart.cartItems))
}
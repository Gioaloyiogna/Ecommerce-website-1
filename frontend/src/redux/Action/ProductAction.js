import axios from "axios";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUC_LIST_SUCCESS } from "../constants/ProductConstants"

export const listProduct=()=>async(dispatch)=>{
   try {
        dispatch({ type:PRODUCT_LIST_REQUEST})
        const {data}=await axios.get("/api/products")
        dispatch({ type:PRODUC_LIST_SUCCESS, payload:data})
   } catch (error) {
      dispatch({
        type:PRODUCT_LIST_FAIL,
        payload:"",
        // error.response.data.message?error
      })
   }
}
//single product action
export const listProductDetails=(id)=>async(dispatch)=>{
   try {
        dispatch({ type:PRODUCT_DETAILS_REQUEST})
        const {data}=await axios.get(`/api/products/${id}`)
        dispatch({ type:PRODUCT_DETAILS_SUCCESS, payload:data})
   } catch (error) {
      dispatch({
        type:PRODUCT_DETAILS_FAIL,
        payload:"",
        // error.response.data.message?error
      })
   }
}
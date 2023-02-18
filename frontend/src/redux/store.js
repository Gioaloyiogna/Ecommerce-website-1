import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productReducer,
  SingleProductReducer,
} from "./reducers/productReducer";
import { catReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  productlist: productReducer,
  ProductDetails: SingleProductReducer,
  cartReducer: catReducer,
});
const cartItemsFromLoaclStorage = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];
const initialState = {
  cart:{
    cartItems:cartItemsFromLoaclStorage
  }
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

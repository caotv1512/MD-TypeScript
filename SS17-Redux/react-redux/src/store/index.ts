//import createStore from 'redux' by legacy_createStore
import { legacy_createStore as createStore } from "redux";
import { IInitialState } from "../types/initial-type";
//Khởi tạo initialState
const initialState : IInitialState = {
  cartCount: 0,
  products: [
  ],
  users: [],
  carts: [],
};


// Khởi tạo store: chuyền vào 2 tham số là : state và action
const store = createStore((state: IInitialState = initialState, action) => {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cartCount: state.cartCount + 1,
    };
  }

  return state;
});

export default store;
// createStore()

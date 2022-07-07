import React, { createContext, useReducer, useContext } from "react";

import reducer from "./reducer";

import { ADD_TO_CART, DELETE_CART_ITEM } from "./actions";

const initialState = {
  itemOnCart: 0,
  cartData: [],
};

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Functions - Methods
  const addItemToCart = (numberOfItem, newCartItem) => {

    //Add item to cart
    let newCart = initialState.cartData;
    newCart.push(newCartItem);

    dispatch({ type: ADD_TO_CART, payload: {numberOfItem, newCart} });
  };

  const removeCartItem = (numberOfItem, itemIndex) =>{

    let newCart = initialState.cartData;
    newCart.splice(itemIndex, 1);
    dispatch({ type: DELETE_CART_ITEM, payload: {numberOfItem, newCart} });
  }

  //Using context provider
  return (
    <AppContext.Provider value={{ ...state, addItemToCart, removeCartItem }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppContextProvider, initialState };

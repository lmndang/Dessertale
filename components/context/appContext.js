import React, { createContext, useReducer, useContext } from "react";

import reducer from "./reducer";

import { ADD_TO_CART } from "./actions";

const initialState = {
  itemOnCart: 0,
  cartData: [],
};

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCart = async (numberOfItem, newCartItem) => {

    //Add item to cart
    let newCart = initialState.cartData;
    newCart.push(newCartItem);

    dispatch({ type: ADD_TO_CART, payload: {numberOfItem, newCart} });
  };

  return (
    <AppContext.Provider value={{ ...state, addItemToCart }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppContextProvider, initialState };

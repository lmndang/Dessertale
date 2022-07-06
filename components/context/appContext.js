import React, { createContext, useReducer, useContext } from "react";

import {ADD_TO_CART} from "./actions";

const moods = ["Happy", "Sad"];
const AppContext = createContext(moods);

const AppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value={moods[0]}>{children}</AppContext.Provider>
  );
};

export {AppContext, AppContextProvider};

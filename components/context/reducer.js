import { ADD_TO_CART } from "./actions";

const reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    return {
      ...state,
      itemOnCart: action.payload.numberOfItem,
    };
  }

  throw new Error(`No such action: ${action.type}`);
};

export default reducer;
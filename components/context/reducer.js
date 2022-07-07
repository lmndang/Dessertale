import { ADD_TO_CART, DELETE_CART_ITEM } from "./actions";

const reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    return {
      ...state,
      itemOnCart: action.payload.numberOfItem,
      cartData: action.payload.newCart
    };
  }

  if(action.type === DELETE_CART_ITEM){
    return {
      ...state,
      itemOnCart: action.payload.numberOfItem,
      cartData: action.payload.newCart
    }
  }

  throw new Error(`No such action: ${action.type}`);
};

export default reducer;

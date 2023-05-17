import { products } from "../data/data";
export const initialState = {
  products,
  wishlist: [],
  cart: [],
};

export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_WISHLIST": {
      return {
        ...state,
        wishlist: [payload, ...state.wishlist],
      };
    }
    case "REMOVE_FROM_WISHLIST": {
      return {
        ...state,
        wishlist: payload,
      };
    }

    default:
      break;
  }
};

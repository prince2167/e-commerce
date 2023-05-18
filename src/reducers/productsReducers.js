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
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [payload, ...state.cart],
      };
    }
    case "ADD_TO_CART_FROM_WISHLIST": {
      return {
        ...state,
        cart: [payload.product, ...state.cart],
        wishlist: payload.updatedWishlist,
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: payload,
      };
    }
    case "MOVE_TO_WISHLIST_FROM_CART": {
      return {
        ...state,
        cart: payload.updatedCart,
        wishlist: [payload.product, ...state.wishlist],
      };
    }

    default:
      break;
  }
};

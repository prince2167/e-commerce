import { products } from "../data/data";
export const initialState = {
  products,
  wishlist: [],
  cart: [],
  priceInput: "",
  categoryFilters: [],
  rating: "",
  sortBy: "",
  searchTerm: "",
  totalMrp: "",
  totalPrice: "",
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
    case "PRICE_RANGE_INPUT": {
      return {
        ...state,
        priceInput: payload,
      };
    }
    case "CATEGORY_FILTERS": {
      return {
        ...state,
        categoryFilters: payload,
      };
    }

    case "RATING": {
      return {
        ...state,
        rating: payload,
      };
    }
    case "SORT_BY": {
      return {
        ...state,
        sortBy: payload,
      };
    }
    case "SEARCH_TERM": {
      return {
        ...state,
        searchTerm: payload,
      };
    }
    case "DECREASE_CART_PRODUCT_QUANTITY": {
      return {
        ...state,
        cart: payload,
      };
    }
    case "TOTAL_PRICE": {
      return {
        ...state,
        totalPrice: payload.updatedTotalPrice,
        totalMrp: payload.updatedTotalMrp,
      };
    }
    case "EXISTING_PRODUCT": {
      return {
        ...state,
        cart: payload,
      };
    }
    default:
      break;
  }
};

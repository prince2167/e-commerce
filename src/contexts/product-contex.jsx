import { createContext, useContext, useReducer } from "react";
import { initialState, productReducer } from "../reducers/productsReducers";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const removeWishlistHandler = (id) => {
    const updatedWishlist = state.wishlist.filter(
      (product) => product.productId !== Number(id)
    );
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: updatedWishlist });
  };
  return (
    <ProductContext.Provider value={{ state, dispatch, removeWishlistHandler }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };

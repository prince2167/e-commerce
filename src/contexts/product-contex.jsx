import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, productReducer } from "../reducers/productsReducers";
import axios from "axios";
import { url } from "../api/products";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const removeWishlistHandler = (id) => {
    const updatedWishlist = state.wishlist.filter(
      (product) => product.productId !== Number(id)
    );
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: updatedWishlist });
  };

  const fetchData = async () => {
    try {
      dispatch({ type: "ISLOADING_TRUE" });
      const { data } = await axios.get(url);
      dispatch({ type: "FETCH_PRODUCTS", payload: data });
      dispatch({ type: "ISLOADING_FALSE" });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ProductContext.Provider value={{ state, dispatch, removeWishlistHandler }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };

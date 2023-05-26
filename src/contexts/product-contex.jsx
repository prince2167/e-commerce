import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, productReducer } from "../reducers/productsReducers";
import axios from "axios";
import { url } from "../api/products";
const ProductContext = createContext();

const storedData = (initialState) =>
  JSON.parse(localStorage.getItem("state")) || initialState;

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    productReducer,
    initialState,
    storedData
  );

  const removeWishlistHandler = (id) => {
    const updatedWishlist = state.wishlist.filter(
      (product) => product.productId !== Number(id)
    );
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: updatedWishlist });
  };

  // local storage
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

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

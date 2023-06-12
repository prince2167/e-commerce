import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, productReducer } from "../reducers/productsReducers";
import axios from "axios";
import { url } from "../api/products";
import { toast } from "react-toastify";
import { useAuth } from "./auth-context";
import { useNavigate } from "react-router";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const navigate = useNavigate();
  const { authState } = useAuth();
  const { user } = authState;

  const removeWishlistHandler = (id) => {
    const updatedWishlist = state.wishlist.filter(
      (product) => product.productId !== Number(id)
    );
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: updatedWishlist });

    toast.success("Remove from wishlist");
  };

  const addToWishlistHandler = (product) => {
    user
      ? dispatch({ type: "ADD_TO_WISHLIST", payload: product })
      : navigate("/login");
    user && toast.success("Add to wishlist");
  };

  const addToCartHandler = (product) => {
    user
      ? dispatch({ type: "ADD_TO_CART", payload: product })
      : navigate("/login");
    user && toast.success("Add to cart");
  };
  // local storage
  // useEffect(() => {
  //   localStorage.setItem("state", JSON.stringify(state));
  // }, [state]);

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
    <ProductContext.Provider
      value={{
        state,
        dispatch,
        removeWishlistHandler,
        addToWishlistHandler,
        addToCartHandler,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };

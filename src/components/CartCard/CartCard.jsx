import { useProducts } from "../../contexts/product-contex";
import classes from "./CartCard.module.css";
import { toast } from "react-toastify";

const CartCard = ({ product }) => {
  const { state, dispatch } = useProducts();
  const { cart } = state;

  const removefromCartHandler = (id) => {
    const updatedCart = cart.filter((product) => product.productId !== id);
    dispatch({ type: "REMOVE_FROM_CART", payload: updatedCart });
    toast.success("Remove from cart");
  };
  const moveWishlistHandler = (id) => {
    const updatedCart = cart.filter((product) => product.productId !== id);
    const product = cart.find((product) => product.productId === id);
    dispatch({
      type: "MOVE_TO_WISHLIST_FROM_CART",
      payload: { updatedCart, product },
    });

    toast.success("Move to wishlist");
  };

  const decreaseQuantityHandler = (id) => {
    const updatedCart = cart.map((product) =>
      product.productId === id
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    dispatch({ type: "DECREASE_CART_PRODUCT_QUANTITY", payload: updatedCart });
    toast.success("Quantity decrease");
  };
  const increaseQuantityHandler = (id) => {
    const updatedCart = cart.map((product) =>
      product.productId === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    dispatch({ type: "DECREASE_CART_PRODUCT_QUANTITY", payload: updatedCart });
    toast.success("Quantity increase");
  };


  return (
    <div className={classes.CartCardContainer}>
      <img src={product?.thumbnail} alt="" />
      <div className={classes.productDetails}>
        <p>{product?.productName}</p>
        <div className={classes.priceDetails}>
          <p className={classes.price}>₹{product?.price}</p>
          <p className={classes.mrp}>{product?.mrp}</p>
          <p className={classes.discountDisplayLabel}>
            {product?.discountDisplayLabel}
          </p>
        </div>

        <div className={classes.qantityContainer}>
          <button
            onClick={() => decreaseQuantityHandler(product?.productId)}
            disabled={product?.quantity <= 1}
          >
            -
          </button>

          <span className={classes.quantity}>{product?.quantity}</span>

          <button onClick={() => increaseQuantityHandler(product.productId)}>
            +
          </button>
        </div>

        <div className={classes.cartButtonGroup}>
          <button
            className={classes.removeCartButton}
            onClick={() => removefromCartHandler(product?.productId)}
          >
            Remove from Cart
          </button>
          <button
            className={classes.moveWishlistButton}
            onClick={() => moveWishlistHandler(product?.productId)}
          >
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

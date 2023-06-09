import { RiHeartAddLine, BsFillHeartFill } from "../../assets/icon";
import classes from "./WishlistCard.module.css";
import { useProducts } from "../../contexts/product-contex";
import { getIsInProducts } from "../../utils";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const WishlistCard = ({ product }) => {
  const { dispatch, state, removeWishlistHandler } = useProducts();
  const { wishlist, cart } = state;
  const navigate = useNavigate();
  const {
    productName,
    price,
    mrp,
    brand,
    thumbnail,
    discountDisplayLabel,
    productId,
  } = product;

  const cartHandler = (id) => {
    const product = wishlist.find((product) => product.productId === id);
    const updatedWishlist = wishlist.filter(
      (product) => product.productId !== id
    );
    dispatch({
      type: "ADD_TO_CART_FROM_WISHLIST",
      payload: { product, updatedWishlist },
    });
    toast.success("Product added to cart");
  };
  const isInWishlist = getIsInProducts(wishlist, productId);
  const isInCart = cart.some(
    (product) => product.productId === Number(productId)
  );

  return (
    <div className={classes.productCard}>
      <div
        className={classes.cardContainer}
        onClick={() => navigate(`/productDetails/${productId}`)}
      >
        <img src={thumbnail} alt="" className={classes.img} />

        <div className={classes.productDetails}>
          <strong>{brand}</strong>
          <p>{productName}</p>
          <div className={classes.priceDetails}>
            <p className={classes.price}>₹{price}</p>
            <p className={classes.mrp}>{mrp}</p>
            <p className={classes.discountDisplayLabel}>
              {discountDisplayLabel}
            </p>
          </div>
        </div>
      </div>

      {isInCart ? (
        <button
          className={classes.cartButton}
          onClick={() => navigate("/cart")}
        >
          Go to cart
        </button>
      ) : (
        <button
          className={classes.cartButton}
          onClick={() => cartHandler(productId)}
        >
          Add to Cart
        </button>
      )}

      <div className={classes.wishlistButton}>
        {isInWishlist ? (
          <button
            className={classes.removeWishlistButton}
            onClick={() => removeWishlistHandler(productId)}
          >
            <BsFillHeartFill size="18" />
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "ADD_TO_WISHLIST", payload: product })
            }
          >
            <RiHeartAddLine size="18" />
          </button>
        )}
      </div>
    </div>
  );
};

export default WishlistCard;

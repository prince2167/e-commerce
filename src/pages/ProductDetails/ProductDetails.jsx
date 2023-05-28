import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/product-contex";
import { useAuth } from "../../contexts/auth-context";
import { RiHeartAddLine, BsFillHeartFill } from "../../assets/icon";
import classes from "./ProductDetails.module.css";
import { getIsInProducts } from "../../utils";
import { ImageSlider } from "../../components/index";

const ProductDetails = () => {
  const { productId } = useParams();
  const {
    authState: { user },
  } = useAuth();
  const { state, dispatch, removeWishlistHandler } = useProducts();
  const { products, wishlist, cart } = state;
  const product = products.find(
    (product) => product.productId === Number(productId)
  );

  const isInWishlist = getIsInProducts(wishlist, productId);
  const isInCart = getIsInProducts(cart, productId);
  const navigate = useNavigate();

  return (
    <div className={classes.productDetailsConatiner}>
      <>
        <ImageSlider images={product?.images} />
        {/* <img src={product?.images[3].url} alt="" /> */}
      </>
      <div className={classes.productDetails}>
        <h3>{product?.brand}</h3>
        <p className={classes.productName}>{product?.productName}</p>
        <strong className={classes.rating}>{product?.rating}</strong>
        <div className={classes.priceDetails}>
          <h2>₹{product?.price}</h2>
          <p className={classes.discountDisplayLabel}>
            {product?.discountDisplayLabel}
          </p>
        </div>
        <p className={classes.mrpDetails}>
          MRP <span className={classes.mrp}>₹{product?.mrp}</span>
          <span className={classes.text}>Inclusive of all taxes</span>
        </p>

        <div className={classes.buttonGroup}>
          {isInWishlist ? (
            <button
              className={classes.removeFromWishlist}
              onClick={() => removeWishlistHandler(productId)}
            >
              <BsFillHeartFill />
              <p>Remove from Wishlist</p>
            </button>
          ) : (
            <button
              className={classes.wishlistButton}
              onClick={() =>
                user
                  ? dispatch({ type: "ADD_TO_WISHLIST", payload: product })
                  : navigate("/login")
              }
            >
              <RiHeartAddLine />
              <p>Add to Wishlist</p>
            </button>
          )}

          {isInCart ? (
            <button
              className={classes.cartButton}
              onClick={() => navigate("/cart")}
            >
              Go to Cart
            </button>
          ) : (
            <button
              className={classes.cartButton}
              onClick={() =>
                user
                  ? dispatch({ type: "ADD_TO_CART", payload: product })
                  : navigate("/login")
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

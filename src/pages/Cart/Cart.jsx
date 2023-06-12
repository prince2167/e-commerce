import React, { useEffect } from "react";
import { useProducts } from "../../contexts/product-contex";
import { CartCard, Loader } from "../../components/index";
import classes from "./Cart.module.css";
import { emptyCart } from "../../assets/images";
import { useNavigate } from "react-router";
const Cart = () => {
  const { state, dispatch } = useProducts();
  const { cart, totalPrice, totalMrp, isLoading } = state;
  const navigate = useNavigate();

  useEffect(() => {
    const updatedTotalPrice = cart?.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    const updatedTotalMrp = cart?.reduce(
      (acc, curr) => acc + curr.mrp * curr.quantity,
      0
    );
    dispatch({
      type: "TOTAL_PRICE",
      payload: { updatedTotalPrice, updatedTotalMrp },
    });
  }, [cart]);
  const discountPrice = totalMrp - totalPrice;
  if (isLoading) return <Loader />;
  // 👇️ scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className={classes.cartpage}>
        {cart.length === 0 && (
          <div className={classes.emptyCard}>
            <img src={emptyCart} alt="cart empty" />
            <div className={classes.emptyCartText}>
              <h1>Your shopping bag is empty!</h1>
              <p>
                Looks like you haven’t added anything to your bag. Let’s change
                that.
              </p>
              <button onClick={() => navigate("/home")}>
                Back to shopping
              </button>
            </div>
          </div>
        )}

        <div className={classes.cartCardList}>
          {cart.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
        </div>

        {cart.length > 0 && (
          <div className={classes.priceContainer}>
            <h2 className={classes.cardHeader}>Price Details</h2>
            <div className={classes.priceDetails}>
              <p>
                Price: <span>₹{totalMrp}</span>{" "}
              </p>
              <p className={classes.discountPrice}>
                Discount: <span>-₹{discountPrice}</span>
              </p>
            </div>

            <h2 className={classes.totalAmount}>
              Total Amount:<span>₹{totalPrice}</span>{" "}
            </h2>

            <button
              className={classes.checkoutButton}
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
